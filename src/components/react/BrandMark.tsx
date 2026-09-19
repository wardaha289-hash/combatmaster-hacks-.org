import { useState } from 'react';
import M416GunIcon from './M416GunIcon';

type Props = {
	homeHref: string;
};

/** Navbar wordmark — CombatMaster with a minimal rifle accent. */
export default function BrandMark({ homeHref }: Props) {
	const [popping, setPopping] = useState(false);

	const triggerPop = () => {
		setPopping(true);
		window.setTimeout(() => setPopping(false), 620);
	};

	return (
		<a
			className={`site-brand${popping ? ' is-popping' : ''}`}
			href={homeHref}
			aria-label="CombatMaster home"
			onPointerDown={triggerPop}
		>
			{popping ? (
				<span className="site-brand__gun-burst" aria-hidden="true">
					<M416GunIcon className="site-brand__gun-burst-icon" />
				</span>
			) : null}
			<span className="site-brand__mark" aria-hidden="true">
				<M416GunIcon className="site-brand__gun" />
				<span className="site-brand__reticle" />
				<span className="site-brand__muzzle" />
			</span>
			<span className="site-brand__text">
				<span className="site-brand__combat">Combat</span>
				<span className="site-brand__master">Master</span>
			</span>
		</a>
	);
}
