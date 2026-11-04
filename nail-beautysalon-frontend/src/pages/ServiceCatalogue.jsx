/*
 * author: Nandipha Galada
 * student number: 221225366
 * date: 13 August 2026
 * The Service Catalogue Page displays all services offered by the nail and beauty salon.
 */

import { useEffect, useState } from 'react';
import ServiceDetails from './ServiceDetails';
import api from '../services/API';

import eyebrowServicesImage from '../assets/eyebrow-services.jpeg';
import facialServicesImage from '../assets/facial-services.jpeg';
import massageServicesImage from '../assets/massage-services.jpeg';
import nailServicesImage from '../assets/nail-services.jpeg';
import waxingServicesImage from '../assets/waxing-services.png';

function ServiceCatalogue() {
    const [selectedService, setSelectedService] = useState(null);
    const [databaseServices, setDatabaseServices] = useState([]);
    const [expandedCategory, setExpandedCategory] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

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

    const categoryImages = {
        'Elegant Nails': nailServicesImage,
        'Therapeutic Massage': massageServicesImage,
        'Premium Facials': facialServicesImage,
        'Lash & Brow': eyebrowServicesImage,
        'Body Waxing': waxingServicesImage
    };

    const categories = [
        ...new Set(databaseServices.map((service) => service.category))
    ];

    if (loading) {
        return (
            <div className="services-catalogue">
                <p>Loading services...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="services-catalogue">
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
        <div className="services-catalogue">

            <section className="services-header">
                <p className="services-subtitle">
                    Beauty • Wellness • Self-Care
                </p>

                <h1>Our Services</h1>

                <p>
                    Discover our carefully selected beauty and wellness
                    treatments, created to help you look and feel your best.
                </p>
            </section>

            <div className="service-categories">

                {categories.map((category) => {
                    const categoryServices = databaseServices.filter(
                        (service) => service.category === category
                    );

                    const isExpanded = expandedCategory === category;

                    return (
                        <section
                            className="service-category-section"
                            key={category}
                        >

                            <button
                                type="button"
                                className="service-category-toggle"
                                onClick={() =>
                                    setExpandedCategory(
                                        isExpanded ? null : category
                                    )
                                }
                                aria-expanded={isExpanded}
                            >
                                <span>{category}</span>

                                <span className="category-toggle-icon">
                                    {isExpanded ? '−' : '+'}
                                </span>
                            </button>

                            {isExpanded && (
                                <div className="services-list">

                                    {categoryServices.map((service) => (
                                        <article
                                            className="service-card"
                                            key={service.serviceId}
                                        >

                                            <img
                                                src={categoryImages[category]}
                                                alt={category}
                                                className="service-card-image"
                                            />

                                            <div className="service-info">

                                                <h3>
                                                    {service.serviceName}
                                                </h3>

                                                <p>
                                                    {service.description}
                                                </p>

                                            </div>

                                            <div className="service-action">

                                                <p className="service-price">
                                                    R{service.price}
                                                </p>

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setSelectedService(service)
                                                    }
                                                >
                                                    View Details
                                                </button>

                                            </div>

                                        </article>
                                    ))}

                                </div>
                            )}

                        </section>
                    );
                })}

            </div>

            {databaseServices.length === 0 && (
                <p>No services are currently available.</p>
            )}

        </div>
    );
}

export default ServiceCatalogue;

