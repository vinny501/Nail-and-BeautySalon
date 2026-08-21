import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Product() {

    const products = [
        {
            id: 1,
            name: 'Nail Strengthening Oil',
            brand: 'Nail Care Pro',
            category: 'Nail Care',
            description: 'Nourishing oil designed to strengthen and hydrate your nails.',
            price: 'R120.00',
            stock: 25,
            lowStockThreshold: 5,
            image: '/nail_strengthening_oil.png'
        },
        {
            id: 2,
            name: 'Cuticle Care Cream',
            brand: 'Beauty Essentials',
            category: 'Nail Care',
            description: 'A gentle cream that helps keep cuticles soft and moisturised.',
            price: 'R95.00',
            stock: 18,
            lowStockThreshold: 5,
            image: '/cuticle_care_cream.png'
        },
        {
            id: 3,
            name: 'Professional Hair Serum',
            brand: 'Salon Luxe',
            category: 'Hair Care',
            description: 'A lightweight serum for smooth, shiny and healthy-looking hair.',
            price: 'R180.00',
            stock: 3,
            lowStockThreshold: 5,
            image: '/professional_hair_serum.png'
        }
    ];


    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');


    const filteredProducts = products.filter((product) => {

        const matchesSearch =
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.brand.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesCategory =
            selectedCategory === 'all' ||
            product.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    return (
        <section className="product-page">

            <Container>


                <div className="products-header">

                    <p className="products-eyebrow">
                        BEAUTY • CARE • QUALITY
                    </p>

                    <h1>
                        Our Products
                    </h1>

                    <p className="products-description">
                        Browse our collection of beauty essentials, from nail care
                        to hair care, all available at the salon.
                    </p>

                </div>



                <div className="product-filters">

                    <input
                        type="text"
                        className="product-search"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />

                    <select
                        className="category-filter"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value="all">
                            All Categories
                        </option>

                        <option value="Nail Care">
                            Nail Care
                        </option>

                        <option value="Hair Care">
                            Hair Care
                        </option>

                    </select>

                </div>



                <Row className="product-grid">

                    {filteredProducts.length > 0 ? (

                        filteredProducts.map((product) => {

                            const isLowStock =
                                product.stock <= product.lowStockThreshold;

                            return (
                                <Col
                                    key={product.id}
                                    md={4}
                                    className="mb-4"
                                >

                                    <Card className="product-card">

                                        {/* Product Image */}
                                        <div className="product-image">

                                            <img
                                                src={product.image}
                                                alt={product.name}
                                            />

                                        </div>


                                        {/* Product Information */}
                                        <Card.Body>

                                            <p className="product-brand">
                                                {product.brand}
                                            </p>

                                            <h3 className="product-name">
                                                {product.name}
                                            </h3>

                                            <p className="product-category">
                                                {product.category}
                                            </p>

                                            <p className="product-description">
                                                {product.description}
                                            </p>


                                            {/* Price and Stock */}
                                            <div className="product-bottom">

                                                <div className="price-row">
                                                    <strong className="product-price">
                                                        {product.price}
                                                    </strong>
                                                </div>

                                                <div className="stock-row">
        <span
            className={
                isLowStock
                    ? 'low-stock'
                    : 'in-stock'
            }
        >
            {isLowStock
                ? 'Low Stock'
                : 'In Stock'}
        </span>
                                                </div>

                                            </div>


                                            {/* Cart Button */}
                                            <button className="add-cart-button">
                                                Add to Cart
                                            </button>

                                        </Card.Body>

                                    </Card>

                                </Col>
                            );
                        })

                    ) : (

                        <Col>
                            <p className="no-products">
                                No products found.
                            </p>
                        </Col>

                    )}

                </Row>

            </Container>

        </section>
    );
}

export default Product;