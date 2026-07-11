import { useState, useEffect, useCallback } from 'react'
import partnersConfig from '../data/partners.json'
import { wordpressService } from '../services/wordpress'

export const usePartners = (options = {}) => {
  const [partners, setPartners] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const {
    filterByCategory = null,
    filterByType = null,
    sortByPriority = true,
    useCMS = false
  } = options

  // Definindo fetchPartners fora do useEffect com useCallback para evitar bugs de referência léxica
  const fetchPartners = useCallback(async () => {
    try {
      setLoading(true)
      let partnersData = []

      if (useCMS) {
        console.log('Buscando parceiros do WordPress CMS...')
        const wpPartners = await wordpressService.getPartners()
        
        if (wpPartners && wpPartners.length > 0) {
          // Camada de Tradução (Anti-Corruption Layer)
          partnersData = wpPartners.map(wp => ({
            id: wp.id,
            name: wp.title?.rendered || 'Parceiro',
            logo: wp._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/images/partners/placeholder.png',
            type: wp.acf?.partner_type || 'regular',
            category: wp.acf?.partner_category || 'technology',
            priority: Number(wp.acf?.priority) || 10,
            link: wp.acf?.website_url || '',
            linkType: wp.acf?.link_type || 'none',
            description: wp.acf?.description || ''
          }))
          console.log(`Sucesso: ${partnersData.length} parceiros importados do WordPress.`)
        } else {
          console.warn('Nenhum parceiro retornado pelo CMS ou erro de conexão. Utilizando fallback local.')
          partnersData = partnersConfig.partners
        }
      } else {
        // Usar dados locais do JSON
        partnersData = partnersConfig.partners
      }

      // Aplicar filtros
      let filteredPartners = [...partnersData]

      if (filterByCategory) {
        filteredPartners = filteredPartners.filter(
          partner => partner.category === filterByCategory
        )
      }

      if (filterByType) {
        filteredPartners = filteredPartners.filter(
          partner => partner.type === filterByType
        )
      }

      // Ordenar por prioridade se solicitado
      if (sortByPriority) {
        filteredPartners.sort((a, b) => (a.priority || 0) - (b.priority || 0))
      }

      setPartners(filteredPartners)
      setError(null)
    } catch (err) {
      setError(err.message)
      console.error('Erro ao buscar parceiros. Usando dados locais como fallback de contingência:', err)
      // Fallback em caso de erro catastrófico
      setPartners(partnersConfig.partners)
    } finally {
      setLoading(false)
    }
  }, [filterByCategory, filterByType, sortByPriority, useCMS])

  useEffect(() => {
    fetchPartners()
  }, [fetchPartners])

  // Função para adicionar/atualizar parceiro (futura integração CMS)
  const updatePartner = async (partnerId, updates) => {
    if (useCMS) {
      // TODO: Implementar atualização via WordPress API
      console.log('CMS update not implemented yet')
      return
    }

    // Atualizar dados locais (apenas para desenvolvimento)
    setPartners(prevPartners =>
      prevPartners.map(partner =>
        partner.id === partnerId ? { ...partner, ...updates } : partner
      )
    )
  }

  // Função para adicionar novo parceiro (futura integração CMS)
  const addPartner = async newPartner => {
    if (useCMS) {
      // TODO: Implementar adição via WordPress API
      console.log('CMS add not implemented yet')
      return
    }

    // Adicionar aos dados locais (apenas para desenvolvimento)
    const partnerWithId = {
      ...newPartner,
      id: Math.max(...partners.map(p => p.id), 0) + 1
    }
    setPartners(prevPartners => [...prevPartners, partnerWithId])
  }

  return {
    partners,
    loading,
    error,
    updatePartner,
    addPartner,
    refresh: fetchPartners
  }
}

export default usePartners

