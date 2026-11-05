/*
 * author: Nandipha Galada
 * student number: 221225366
 * date: 13 August 2026
 * The Service Catalogue Page displays all services offered by the salon.
 */

import { useEffect, useMemo, useState } from 'react';
import api from '../services/api';
import ServiceDetails from './ServiceDetails';

// Category cover images
import eyebrowServicesImage from '../assets/eyebrow-services.jpeg';
import facialServicesImage from '../assets/facial-services.jpeg';
import massageServicesImage from '../assets/massage-services.jpeg';
import nailServicesImage from '../assets/nail-services.jpeg';
import waxingServicesImage from '../assets/waxing-services.png';

// Individual service images
import antiAgingFacialImage from '../assets/anti-aging-facial.jpg';
import acrylicNailsImage from '../assets/arcylic-nails.jpg';
import backShoulderMassageImage from '../assets/back-sholder-massage.jpg';
import bikiniWaxImage from '../assets/bikini-wax.jpg';
import browLaminationImage from '../assets/brow-lamination.jpg';
import browShapeTintImage from '../assets/brow-shape-tint.jpg';
import classicLashesImage from '../assets/classic-lashes.jpg';
import couplesMassageImage from '../assets/couples-massage.jpg';
import deepCleansingFacialImage from '../assets/deep-cleasing-facial.jpg';
import fullBodyWaxImage from '../assets/full-body-wax.jpg';
import gelNailsImage from '../assets/gel-nails.jpg';
import hotStoneMassageImage from '../assets/hot-stone-massage.jpg';
import hydratingGlowFacialImage from '../assets/hydrating-glow-facial.jpg';
import lashLiftTintImage from '../assets/lash-lift-tint.jpg';
import luxuryPedicureImage from '../assets/luxury-pedicure.jpg';
import microneedlingFacialImage from '../assets/microneedling-facial.jpg';
import nailArtImage from '../assets/nail-art.jpg';
import underarmWaxImage from '../assets/underarm-wax.jpg';

function ServiceCatalogue() {

    const [selectedService, setSelectedService] = useState(null);
    const [databaseServices, setDatabaseServices] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const categories = [
        {
            name: 'Elegant Nails',
            label: 'Nails',
            description: 'Beautiful nail treatments for every occasion.',
            image: nailServicesImage
        },
        {
            name: 'Therapeutic Massage',
            label: 'Massage',
            description: 'Relax, unwind and enjoy a moment of wellness.',
            image: massageServicesImage
        },
        {
            name: 'Premium Facials',
            label: 'Facials',
            description: 'Skincare treatments to refresh and nourish.',
            image: facialServicesImage
        },
        {
            name: 'Lash & Brow',
            label: 'Lash & Brow',
            description: 'Enhance your natural beauty with expert care.',
            image: eyebrowServicesImage
        },
        {
            name: 'Body Waxing',
            label: 'Waxing',
            description: 'Smooth and professional waxing treatments.',
            image: waxingServicesImage
        }
    ];

    const serviceImages = {
        'Gel Manicure': gelNailsImage,
        'Luxury Pedicure': luxuryPedicureImage,
        'Acrylic Full Set': acrylicNailsImage,
        'Signature Nail Art': nailArtImage,

        'Full Body Massage': massageServicesImage,
        'Couples Massage': couplesMassageImage,
        'Hot Stone Massage': hotStoneMassageImage,
        'Back and Shoulder Massage': backShoulderMassageImage,

        'Deep Cleansing Facial': deepCleansingFacialImage,
        'Hydrating Glow Facial': hydratingGlowFacialImage,
        'Anti-Aging Facial': antiAgingFacialImage,
        'Microneedling Facial': microneedlingFacialImage,

        'Classic Lashes': classicLashesImage,
        'Lash Lift and Tint': lashLiftTintImage,
        'Brow Lamination': browLaminationImage,
        'Brow Shaping and Tint': browShapeTintImage,

        'Full Body Wax': fullBodyWaxImage,
        'Half Leg Wax': waxingServicesImage,
        'Underarm Wax': underarmWaxImage,
        'Bikini Wax': bikiniWaxImage
    };

    useEffect(() => {
        api.get('/service/getAll')
            .then((response) => {
                setDatabaseServices(response.data);
                setError('');
            })
            .catch((err) => {
                console.error('Could not load services:', err);
                setError('We could not load services at this time.');
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const filteredServices = useMemo(() => {
        return databaseServices.filter((service) => {

            const matchesCategory =
                !selectedCategory ||
                service.category === selectedCategory;

            const searchValue = searchTerm.toLowerCase().trim();

            const matchesSearch =
                !searchValue ||
                service.serviceName?.toLowerCase().includes(searchValue) ||
                service.category?.toLowerCase().includes(searchValue) ||
                service.description?.toLowerCase().includes(searchValue);

            return matchesCategory && matchesSearch;
        });
    }, [databaseServices, selectedCategory, searchTerm]);

    const showSearchResults = searchTerm.trim().length > 0;

    if (loading) {
        return (
            <div className="services-loading">
                <p>Preparing your salon experience...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="services-loading">
                <h2>Something went wrong</h2>
                <p>{error}</p>
                <p>Please check that the backend server is running.</p>
            </div>
        );
    }

    if (selectedService) {
        return (
            <ServiceDetails
                service={selectedService}
                onBack={() => setSelectedService(null)}
            />
        );
    }

    return (
        <main className="services-catalogue">

            <section className="services-introduction">

                <p className="services-eyebrow">
                    THE SALON EXPERIENCE
                </p>

                <h2>Find your perfect treatment.</h2>

                <p>
                    From everyday beauty essentials to moments of complete
                    relaxation, explore treatments created with you in mind.
                </p>

            </section>

            <section className="services-explorer">

                <div className="services-search-wrapper">

                    <span className="services-search-icon">
                        ⌕
                    </span>

                    <input
                        type="search"
                        className="services-search"
                        placeholder="Search for a service..."
                        value={searchTerm}
                        onChange={(event) => {
                            setSearchTerm(event.target.value);
                            setSelectedCategory(null);
                        }}
                        aria-label="Search salon services"
                    />

                    {searchTerm && (
                        <button
                            type="button"
                            className="clear-search"
                            onClick={() => setSearchTerm('')}
                            aria-label="Clear search"
                        >
                            ×
                        </button>
                    )}

                </div>

                <div className="services-filter-heading">
                    <span>EXPLORE BY CATEGORY</span>
                </div>

                {!selectedCategory && !showSearchResults && (

                    <section className="service-categories-grid">

                        {categories.map((category) => (

                            <article
                                className="service-category-card"
                                key={category.name}
                                onClick={() => setSelectedCategory(category.name)}
                            >

                                <div className="service-category-image-wrapper">

                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="service-category-image"
                                    />

                                </div>

                                <div className="service-category-content">

                                    <h3>{category.label}</h3>

                                    <p>{category.description}</p>

                                    <button
                                        type="button"
                                        className="service-category-button"
                                        onClick={() => setSelectedCategory(category.name)}
                                    >
                                        Explore Category
                                        <span>→</span>
                                    </button>

                                </div>

                            </article>

                        ))}

                    </section>

                )}

                {(selectedCategory || showSearchResults) && (

                    <section className="selected-category-section">

                        <div className="selected-category-heading">

                            <div>

                                <p className="services-eyebrow">
                                    {selectedCategory
                                        ? 'EXPLORE OUR TREATMENTS'
                                        : 'SEARCH RESULTS'}
                                </p>

                                <h2>
                                    {selectedCategory
                                        ? categories.find(
                                            category => category.name === selectedCategory
                                        )?.label
                                        : 'Find your treatment'}
                                </h2>

                            </div>

                            <button
                                type="button"
                                className="back-to-categories"
                                onClick={() => {
                                    setSelectedCategory(null);
                                    setSearchTerm('');
                                }}
                            >
                                ← Back to Categories
                            </button>

                        </div>

                        <div className="services-grid">

                            {filteredServices.length > 0 ? (

                                filteredServices.map((service) => {

                                    const categoryImage = categories.find(
                                        category => category.name === service.category
                                    )?.image;

                                    const serviceImage =
                                        serviceImages[service.serviceName] || categoryImage;

                                    return (

                                        <article
                                            className="service-card"
                                            key={service.serviceId}
                                        >

                                            <div className="service-card-image-wrapper">

                                                <img
                                                    src={serviceImage}
                                                    alt={service.serviceName}
                                                    className="service-card-image"
                                                />

                                                <span className="service-card-category">
                                                    {service.category}
                                                </span>

                                            </div>

                                            <div className="service-card-content">

                                                <h3>{service.serviceName}</h3>

                                                <p className="service-card-description">
                                                    {service.description}
                                                </p>

                                                <div className="service-card-footer">

                                                    <div className="service-card-price">

                                                        <span>FROM</span>

                                                        <strong>
                                                            R{service.price}
                                                        </strong>

                                                    </div>

                                                    <button
                                                        type="button"
                                                        className="service-details-button"
                                                        onClick={() => setSelectedService({
                                                            ...service,
                                                            image: serviceImage
                                                        })}
                                                    >
                                                        View Details
                                                        <span>→</span>
                                                    </button>

                                                </div>

                                            </div>

                                        </article>

                                    );
                                })

                            ) : (

                                <div className="services-empty">

                                    <span>✧</span>

                                    <h3>No services found</h3>

                                    <p>
                                        We couldn't find a treatment matching your search.
                                        Try another service or category.
                                    </p>

                                    <button
                                        type="button"
                                        onClick={() => {
                                            setSearchTerm('');
                                            setSelectedCategory(null);
                                        }}
                                    >
                                        View All Categories
                                    </button>

                                </div>

                            )}

                        </div>

                    </section>

                )}

            </section>

        </main>
    );
}

export default ServiceCatalogue;