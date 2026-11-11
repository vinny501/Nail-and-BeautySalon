/*
 * author: Nandipha Galada
 * student number: 221225366
 * date: 17 August 2026
 * The Service Details Page displays information about a selected salon service.
 */

import { useNavigate } from 'react-router-dom';

import eyebrowServicesImage from '../assets/eyebrow-services.jpeg';
import facialServicesImage from '../assets/facial-services.jpeg';
import massageServicesImage from '../assets/massage-services.jpeg';
import nailServicesImage from '../assets/nail-services.jpeg';
import waxingServicesImage from '../assets/waxing-services.png';

function ServiceDetails({ service, onBack }) {

    const navigate = useNavigate();

    if (!service) {
        return (
            <div className="service-details-not-found">
                <h1>Service Not Found</h1>

                <button type="button" onClick={onBack}>
                    Back to Services
                </button>
            </div>
        );
    }

    const categoryImages = {
        'Elegant Nails': nailServicesImage,
        'Therapeutic Massage': massageServicesImage,
        'Premium Facials': facialServicesImage,
        'Lash & Brow': eyebrowServicesImage,
        'Body Waxing': waxingServicesImage
    };

    // Display the individual service image or use the category image as a fallback.
    const serviceImage =
        service.image || categoryImages[service.category];

    return (
        <div className="service-details">

            <div className="service-details-card">

                <img
                    src={serviceImage}
                    alt={service.serviceName}
                    className="service-details-image"
                />

                <div className="service-details-content">

                    <p className="service-details-category">
                        {service.category}
                    </p>

                    <h1>{service.serviceName}</h1>

                    <p className="service-details-description">
                        {service.description}
                    </p>

                    <div className="service-details-price">
                        <span>Price</span>
                        <strong>R{service.price}</strong>
                    </div>

                    <div className="service-details-actions">

                        <button
                            type="button"
                            className="book-service-button"
                            onClick={() =>
                                navigate('/appointment', {
                                    state: { service }
                                })
                            }
                        >
                            Book Appointment
                        </button>

                        <button
                            type="button"
                            className="back-service-button"
                            onClick={onBack}
                        >
                            Back to Services
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default ServiceDetails;