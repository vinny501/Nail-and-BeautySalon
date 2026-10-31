import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import api from '../services/api';

const PROVINCES = ['Eastern Cape', 'Free State', 'Gauteng', 'KwaZulu-Natal', 'Limpopo', 'Mpumalanga', 'Northern Cape', 'North West', 'Western Cape'];
const SERVICES = ['Manicure', 'Pedicure', 'Gel Nails', 'Acrylic Nails', 'Nail Art', 'Massage', 'Facial', 'Waxing'];

function BookAppointment() {
    const navigate = useNavigate();
    const location = useLocation();
    
    // Check if a service was passed from the previous page
    const passedService = location.state?.preselectedService || '';

    const [form, setForm] = useState({
        dateTime: '',
        serviceSelected: passedService, // Set initial state to passed service
        streetNumber: '',
        streetName: '',
        suburb: '',
        city: '',
        province: '',
        postalCode: '',
        notes: '',
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        if (location.state?.preselectedService) {
            setForm((prev) => ({
                ...prev,
                serviceSelected: location.state.preselectedService
            }));
        }
    }, [location]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!form.dateTime) return setError('Please select a date and time.');
        if (!form.serviceSelected) return setError('Please select a service.');
        if (!form.streetNumber || !form.streetName) return setError('Please fill in your street details.');
        if (!form.city || !form.suburb) return setError('Please fill in your city and suburb.');
        if (!form.province) return setError('Please select a province.');
        if (!/^\d{4}$/.test(form.postalCode)) return setError('Please enter a valid 4-digit postal code.');

        const selectedDate = new Date(form.dateTime);
        if (selectedDate <= new Date()) {
            return setError('Please select a future date and time.');
        }

        setSubmitting(true);

        const payload = {
            dateTime: selectedDate.toISOString().slice(0, 19), 
            serviceSelected: form.serviceSelected,
            notes: form.notes,
            status: 'Pending',
            address: {
                streetNumber: form.streetNumber,
                streetName: form.streetName,
                suburb: form.suburb,
                city: form.city,
                province: form.province,
                postalCode: parseInt(form.postalCode, 10), 
            }
        };

        try {
            await api.post('/appointment/book', payload);
            setSuccess(`Booked successfully! Redirecting to your dashboard...`);
            
            setTimeout(() => {
                navigate('/customer/dashboard');
            }, 2000);

        } catch (err) {
            console.error("Booking error:", err);
            const backendMessage = err.response?.data?.message || err.response?.data || err.message;
            setError(`Failed to book: ${backendMessage}`);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="min-vh-100 bg-light p-4">
            <Container className="d-flex justify-content-center mt-4">
                <Card style={{ width: '600px' }} className="shadow-sm border-0 p-4">
                    <h2 className="text-center mb-4">Book an Appointment</h2>

                    {error && <Alert variant="danger">{error}</Alert>}
                    {success && <Alert variant="success">{success}</Alert>}

                    <Form onSubmit={handleSubmit} noValidate>
                        
                        <div className="d-flex gap-3 mb-3">
                            <Form.Group className="w-100">
                                <Form.Label>Service</Form.Label>
                                {passedService ? (
                                    // If service was passed, show it as a locked read-only field
                                    <>
                                        <Form.Control 
                                            type="text" 
                                            value={form.serviceSelected} 
                                            readOnly 
                                            className="bg-light" 
                                        />
                                        {/* <Form.Text className="text-muted">
                                            This service is locked based on your selection.
                                        </Form.Text> */}
                                    </>
                                ) : (
                                    // If no service was passed, show the dropdown so they can pick
                                    <Form.Select name="serviceSelected" value={form.serviceSelected} onChange={handleChange} required>
                                        <option value="">Choose a service</option>
                                        {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                                    </Form.Select>
                                )}
                            </Form.Group>
                        </div>

                        <Form.Group className="mb-3">
                            <Form.Label>Date & Time</Form.Label>
                            <Form.Control 
                                type="datetime-local" 
                                name="dateTime" 
                                value={form.dateTime} 
                                onChange={handleChange} 
                                required 
                            />
                        </Form.Group>

                        <h5 className="mt-4 mb-3">Your Address</h5>
                        
                        <div className="d-flex gap-3 mb-3">
                            <Form.Group className="w-50">
                                <Form.Control name="streetNumber" placeholder="Street Number" value={form.streetNumber} onChange={handleChange} required />
                            </Form.Group>
                            <Form.Group className="w-50">
                                <Form.Control name="streetName" placeholder="Street Name" value={form.streetName} onChange={handleChange} required />
                            </Form.Group>
                        </div>

                        <div className="d-flex gap-3 mb-3">
                            <Form.Group className="w-50">
                                <Form.Control name="suburb" placeholder="Suburb" value={form.suburb} onChange={handleChange} required />
                            </Form.Group>
                            <Form.Group className="w-50">
                                <Form.Control name="city" placeholder="City" value={form.city} onChange={handleChange} required />
                            </Form.Group>
                        </div>

                        <div className="d-flex gap-3 mb-3">
                            <Form.Group className="w-50">
                                <Form.Select name="province" value={form.province} onChange={handleChange} required>
                                    <option value="">Select Province</option>
                                    {PROVINCES.map(p => <option key={p} value={p}>{p}</option>)}
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="w-50">
                                <Form.Control name="postalCode" placeholder="Postal Code" maxLength={4} value={form.postalCode} onChange={handleChange} required />
                            </Form.Group>
                        </div>

                        <Form.Group className="mb-4">
                            <Form.Label>Notes (Optional)</Form.Label>
                            <Form.Control as="textarea" rows={3} name="notes" value={form.notes} onChange={handleChange} placeholder="Allergies, preferences, etc." />
                        </Form.Group>

                        <Button type="submit" variant="primary" className="w-100" disabled={submitting}>
                            {submitting ? 'Booking...' : 'Request Appointment'}
                        </Button>
                    </Form>
                </Card>
            </Container>
        </div>
    );
}

export default BookAppointment;