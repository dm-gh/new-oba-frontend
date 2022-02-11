import { fetchAPI } from './api'
import {
    AboutPageApi,
    ContactApi,
    GlobalApi,
    HomepageApi,
    StrapiSingleResponse,
} from '../types'

export const fetchAboutPage = async () =>
    fetchAPI<StrapiSingleResponse<AboutPageApi>>('/about-page', {
        populate: {
            seo: { populate: '*' },
            aboutSection: { populate: '*' },
            nominationsSection: { populate: '*' },
            conditionsSection: { populate: '*' },
            juriesSection: { populate: '*' },
            contactsSection: { populate: '*' },
        },
    })

export const fetchContact = async () =>
    fetchAPI<StrapiSingleResponse<ContactApi>>('/contact', {
        populate: '*',
    })

export const fetchHomePage = async () =>
    fetchAPI<StrapiSingleResponse<HomepageApi>>('/homepage', {
        populate: {
            seo: { populate: '*' },
            logo: { populate: '*' },
            links: { populate: '*' },
        },
    })

export const fetchGlobal = async () =>
    fetchAPI<StrapiSingleResponse<GlobalApi>>('/global', {
        populate: {
            favicon: '*',
            seo: {
                populate: '*',
            },
        },
    })
