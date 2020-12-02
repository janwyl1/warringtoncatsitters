import React from "react";
import {Link} from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

export default function Footer() {
    return (
    <footer>
        <Container>
            <Row>
                <Col xs={12}>
                    <p>Copyright &copy; 2020 Warrington Dog Walkers (Trading as Warrington Cat Sitters)</p>
                    <p className="footer-small">Need a Dog Walker? Visit <a
                            href="https://warringtondogwalkers.com">warringtondogwalkers.com</a></p>
                    <p className="footer-small">Designed by <a href="https://github.com/janwyl1">James Anwyl</a></p> 
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={{span:6, offset: 6}}>
                    <ul className="policies">
                        <li><Link to="/privacy-policy" className="footer-small">Privacy Policy</Link></li>
                        <li><Link to="/cookie-policy" className="footer-small">Cookie Policy</Link></li>
                        <li><Link to="/credits" className="footer-small">Credits</Link></li>
                    </ul>            
                </Col>
            </Row>
        </Container>
    </footer>
    )
}
