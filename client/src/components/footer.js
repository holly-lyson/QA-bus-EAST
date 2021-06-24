import React, { Component, useState }  from 'react'
import './footer.css'

class Footer extends Component {
	render() {
		return(
			<div style={{paddingTop: "50pt"}}>
				{/* <div className="container"></div> */}
				<footer>
				{/* <!-- Footer main --> */}
				<section className="ft-main">
					<div className="ft-main-item">
					<h2 className="ft-title"><a href="/about">About</a></h2>
					<ul className="ft-about-col">
						<li><a href="/faq">FAQ</a></li>
						<li><a href="/testimonials">Testimonials</a></li>
						<li><a href="/referrals">Referrals</a></li>
					</ul>
					</div>
					<div className="ft-main-item">
					<h2 className="ft-title"><a>Service Area</a></h2>
					<ul>
						<li><a>Central Jersey</a></li>
						<li><a>South Jersey</a></li>
						<li><a>Philadelphia</a></li>
					</ul>
					</div>
					<div className="ft-main-item">
					<h2 className="ft-title"><a href="/contact">Contact</a></h2>
					<ul>
						<li><a>Jeremy Lyson</a></li>
						<li><a href="tel:6097421457">609-742-1457</a></li>
						<li><a href="mailto:jeremylyson@surfandturfroofing.com" >jeremylyson@surfandturfroofing.com</a></li>
					</ul>
					</div>
					
				</section>
				
				{/* <!-- Footer social --> */}
				<section className="ft-social">
					<ul className="ft-social-list">
					<li><a target="_blank" href="https://github.com/holly-lyson/QA-bus-EAST" ><i className="fab fa-github"></i></a></li>
					<li><a target="_blank" href="https://linkedin.com/in/hollyzurenda" target="_blank"><i className="fab fa-linkedin"></i></a></li>
					</ul>
				</section>
				
				{/* <!-- Footer legal --> */}
				<section className="ft-legal">
					<ul className="ft-legal-list">
					<li><a href="#">Terms &amp; Conditions</a></li>
					<li><a href="#">Privacy Policy</a></li>
					<li>&copy; 2019 Copyright Nowrap Inc.</li>
					</ul>
				</section>
				</footer>
			</div>

		)
	}
}

export default Footer;