import { useState, useEffect, useCallback } from 'react'
import partnersConfig from '../data/partners.json'
import { wordpressService } from '../services/wordpress'

export interface Partner {
  id: number
  name: string
  logo: string
  type: string
  category: string
  priority: number
  link: string
  linkType: 'external' | 'internal' | 'modal' | 'none' | string
  description: string
}

export interface UsePartnersOptions {
  filterByCategory?: string | null
  filterByType?: string | null
  sortByPriority?: boolean
  useCMS?: boolean
}

export const usePartners = (options: UsePartnersOptions = {}) => {
  const [partners, setPartners] = useState<Partner[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const {
    filterByCategory = null,
    filterByType = null,
    sortByPriority = true,
    useCMS = false
  } = options

  const fetchPartners = useCallback(async () => {
    try {
      setLoading(true)
      let partnersData: Partner[] = []

      if (useCMS) {
        const wpPartners = await wordpressService.getPartners()
        
        if (wpPartners && wpPartners.length > 0) {
          partnersData = wpPartners.map((wp: any) => ({
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
        } else {
          partnersData = partnersConfig.partners as Partner[]
        }
      } else {
        partnersData = partnersConfig.partners as Partner[]
      }

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

      if (sortByPriority) {
        filteredPartners.sort((a, b) => (a.priority || 0) - (b.priority || 0))
      }

      setPartners(filteredPartners)
      setError(null)
    } catch (err: any) {
      setError(err.message || 'Error fetching partners')
      setPartners(partnersConfig.partners as Partner[])
    } finally {
      setLoading(false)
    }
  }, [filterByCategory, filterByType, sortByPriority, useCMS])

  useEffect(() => {
    fetchPartners()
  }, [fetchPartners])

  const updatePartner = async (partnerId: number, updates: Partial<Partner>) => {
    if (useCMS) {
      console.log('CMS update not implemented yet')
      return
    }

    setPartners(prevPartners =>
      prevPartners.map(partner =>
        partner.id === partnerId ? { ...partner, ...updates } : partner
      )
    )
  }

  const addPartner = async (newPartner: Omit<Partner, 'id'>) => {
    if (useCMS) {
      console.log('CMS add not implemented yet')
      return
    }

    const partnerWithId: Partner = {
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
