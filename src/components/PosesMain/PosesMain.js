import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function PosesMain(props) {
	const [poses, setPoses] = useState([]);
	
	useEffect(() => {
		getAsana();
	}, []);
	
	async function getAsana() {
		const url = `https://still-sands-89510.herokuapp.com/flowfactory/asana`;
		const res = await fetch(url);
		const resJson = await res.json();
		setPoses(resJson)
	};
	
	if (!poses) {
		return <p> Loading...</p>
	}
	return (
		<div>
		<h1>All Poses</h1>
		<section className='posesContainer'>
		{poses.map((pose) => {
			return (
				<Link to={`/poseDetails/${pose._id}`} key={pose.id}>
					<div className='poseCard'>
						<div className='cardImage'>
							<img src={pose.image} alt={pose.englishName} />
						</div>
						<div className='cardTitle'>
							<h3>{pose.englishName}</h3>
						</div>
					</div>
				</Link>
				);
			})};
			</section>
			</div>
			);
		}
		
		export default PosesMain;
		