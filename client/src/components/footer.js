import React, { Component, useState }  from 'react'
import './footer.css'

class Footer extends Component {
	render() {
		return(
			<body>
				<div class="container"></div>
				<footer>
				{/* <!-- Footer main --> */}
				<section class="ft-main">
					<div class="ft-main-item">
					<h2 class="ft-title"><a href="/about">About</a></h2>
					<ul class="ft-about-col">
						<li><a href="/faq">FAQ</a></li>
						<li><a href="/testimonials">Testimonials</a></li>
						<li><a href="/referrals">Referrals</a></li>
					</ul>
					</div>
					<div class="ft-main-item">
					<h2 class="ft-title"><a>Service Area</a></h2>
					<ul>
						<li><a>Central Jersey</a></li>
						<li><a>South Jersey</a></li>
						<li><a>Philadelphia</a></li>
					</ul>
					</div>
					<div class="ft-main-item">
					<h2 class="ft-title"><a href="/contact">Contact</a></h2>
					<ul>
						<li><a>Jeremy Lyson</a></li>
						<li><a>609-742-1457</a></li>
						<li><a>JeremyLyson@email</a></li>
					</ul>
					</div>
					
				</section>
				
				{/* <!-- Footer social --> */}
				<section class="ft-social">
					<ul class="ft-social-list">
					<li><a href="#"><i class="fab fa-facebook"></i></a></li>
					<li><a href="#"><i class="fab fa-twitter"></i></a></li>
					<li><a href="#"><i class="fab fa-instagram"></i></a></li>
					<li><a href="#"><i class="fab fa-github"></i></a></li>
					<li><a href="#"><i class="fab fa-linkedin"></i></a></li>
					<li><a href="#"><i class="fab fa-youtube"></i></a></li>
					</ul>
				</section>
				
				{/* <!-- Footer legal --> */}
				<section class="ft-legal">
					<ul class="ft-legal-list">
					<li><a href="#">Terms &amp; Conditions</a></li>
					<li><a href="#">Privacy Policy</a></li>
					<li>&copy; 2019 Copyright Nowrap Inc.</li>
					</ul>
				</section>
				</footer>
			</body>

		)
	}
}

export default Footer;