import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import USERS from '../../common/data/userDummyData';
import { demoPages } from '../../menu';
import useDarkMode from '../../hooks/useDarkMode';
import Collapse from '../../components/bootstrap/Collapse';
import { NavigationLine } from '../Navigation/Navigation';
import Icon from '../../components/icon/Icon';
import useNavigationItemHandle from '../../hooks/useNavigationItemHandle';
import Popovers from '../../components/bootstrap/Popovers';
import { AuthContext } from '../../contexts/AuthContext';

const User = () => {
	const navigate = useNavigate();
	const handleItem = useNavigationItemHandle();
	const { darkModeStatus, setDarkModeStatus } = useDarkMode();
	const { user } = useContext(AuthContext);
	const [collapseStatus, setCollapseStatus] = useState(false);

	const { t } = useTranslation(['translation', 'menu']);

	const { dispatch } = useContext(AuthContext);
	const handleOnClick = async (e) => {
		e.preventDefault();
		dispatch({ type: 'LOGOUT' });
		navigate(`../${demoPages.login.path}`);
	};

	return (
		<>
			<div
				className={classNames('user', { open: collapseStatus })}
				role='presentation'
				onClick={() => setCollapseStatus(!collapseStatus)}>
				<div className='user-avatar'>
					<img
						srcSet={USERS.JOHN.srcSet}
						src={USERS.JOHN.src}
						alt='Avatar'
						width={128}
						height={128}
					/>
				</div>
				<div className='user-info'>
					<div className='user-name'>
						<Popovers title='User.js' desc={<code>src/layout/User/User.js</code>}>
							{user ? user.username : ''}
						</Popovers>
						<code className='ps-2'>{user ? user.role : ''}</code>
					</div>
					<div className='user-sub-title'>
						<Popovers title='User.js' desc={<code>src/layout/User/User.js</code>}>
							{user ? user.email : ''}
						</Popovers>
						{/* <code className='ps-2'>User.js</code> */}
					</div>
				</div>
			</div>

			<Collapse isOpen={collapseStatus} className='user-menu'>
				<nav aria-label='aside-bottom-user-menu'>
					<div className='navigation'>
						<div
							role='presentation'
							className='navigation-item cursor-pointer'
							onClick={() =>
								navigate(
									`../${demoPages.appointment.subMenu.employeeID.path}/${USERS.JOHN.id}`,
									handleItem(),
								)
							}>
							<span className='navigation-link navigation-link-pill'>
								<span className='navigation-link-info'>
									<Icon icon='AccountBox' className='navigation-icon' />
									<span className='navigation-text'>{t('menu:Profile')}</span>
								</span>
							</span>
						</div>
						<div
							role='presentation'
							className='navigation-item cursor-pointer'
							onClick={() => {
								setDarkModeStatus(!darkModeStatus);
								handleItem();
							}}>
							<span className='navigation-link navigation-link-pill'>
								<span className='navigation-link-info'>
									<Icon
										icon={darkModeStatus ? 'DarkMode' : 'LightMode'}
										color={darkModeStatus ? 'info' : 'warning'}
										className='navigation-icon'
									/>
									<span className='navigation-text'>
										{darkModeStatus ? t('menu:DarkMode') : t('menu:LightMode')}
									</span>
								</span>
							</span>
						</div>
					</div>
				</nav>
				<NavigationLine />
				<nav aria-label='aside-bottom-user-menu-2'>
					<div className='navigation'>
						<div
							role='presentation'
							className='navigation-item cursor-pointer'
							onClick={handleOnClick}>
							<span className='navigation-link navigation-link-pill'>
								<span className='navigation-link-info'>
									<Icon icon='Logout' className='navigation-icon' />
									<span className='navigation-text'>{t('menu:Logout')}</span>
								</span>
							</span>
						</div>
					</div>
				</nav>
			</Collapse>
		</>
	);
};

export default User;
