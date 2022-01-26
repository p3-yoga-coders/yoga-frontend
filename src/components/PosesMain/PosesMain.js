import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import seeds from '../../seeds.json';

function PosesMain(props) {
	const [poses, setPoses] = useState([]);
	const url = `https://still-sands-89510.herokuapp.com/flowfactory/asana`;

	useEffect(() => {
		fetch(url)
		.then((res) => res.json())
		.then((json) => {
			setPoses(json)
		})
		.catch(console.error);
	}, []);

	
	return (
		<div>
			<h1>All Poses</h1>
			<section className='poses-container'>
				{poses.map((pose) => {
					return (
						<Link to={`/poseDetails/${pose.id}`} key={pose.id}>
							<div className='pose-card'>
								<div className='card-image'>
									<img src={pose.image} alt={pose.englishName} />
								</div>
								<div className='card-title'>
									<h3>{pose.englishName}</h3>
								</div>
							</div>
						</Link>
					);
				})}
			</section>
			PosesMain
		</div>
	);
}

export default PosesMain;
