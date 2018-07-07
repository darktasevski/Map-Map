import React from 'react';

export const SearchIcon = props => {
	const { width, height, styles, size, ...rest } = props;

	return (
		<svg viewBox="0 0 48 48" width={size || width} height={size || height} className={styles}>
			<path
				fill={props.fill || '#595959'}
				{...rest}
				className={' '}
				fillRule="evenodd"
				d="M29.385 21.846c0-2.075-.738-3.85-2.213-5.326-1.475-1.475-3.25-2.212-5.326-2.212-2.075 0-3.85.737-5.326 2.212-1.475 1.476-2.212 3.25-2.212 5.326 0 2.075.737 3.85 2.212 5.326 1.476 1.475 3.25 2.213 5.326 2.213 2.075 0 3.85-.738 5.326-2.213 1.475-1.475 2.213-3.25 2.213-5.326zm8.615 14a2.07 2.07 0 0 1-.64 1.515 2.07 2.07 0 0 1-1.514.639c-.606 0-1.11-.213-1.514-.64l-5.772-5.754c-2.008 1.39-4.246 2.086-6.714 2.086a11.64 11.64 0 0 1-4.602-.934c-1.464-.622-2.726-1.464-3.786-2.524s-1.902-2.322-2.524-3.786A11.64 11.64 0 0 1 10 21.846c0-1.604.311-3.138.934-4.602.622-1.464 1.464-2.726 2.524-3.786s2.322-1.902 3.786-2.524A11.64 11.64 0 0 1 21.846 10c1.604 0 3.138.311 4.602.934 1.464.622 2.726 1.464 3.786 2.524s1.902 2.322 2.524 3.786a11.64 11.64 0 0 1 .934 4.602c0 2.468-.695 4.706-2.086 6.714l5.771 5.772c.415.415.623.92.623 1.514z"
			/>
		</svg>
	);
};
