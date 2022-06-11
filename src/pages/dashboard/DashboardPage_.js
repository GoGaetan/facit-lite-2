import React from 'react';

import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import SubHeader, {
	SubHeaderLeft,
	SubHeaderRight,
	SubheaderSeparator,
} from '../../layout/SubHeader/SubHeader';
import Page from '../../layout/Page/Page';
import Popovers from '../../components/bootstrap/Popovers';

const DashboardPage = () => {
	return (
		<PageWrapper title='Dashboard Page'>
			<SubHeader>
				<SubHeaderLeft>
					<Popovers
						title='DashboardPage.js'
						desc={<code>src/pages/dashboard/DashboardPage.js</code>}>
						SubHeaderLeft
					</Popovers>
					<code>DashboardPage.js</code>
					<SubheaderSeparator />
				</SubHeaderLeft>
				<SubHeaderRight>
					<Popovers
						title='DashboardPage.js'
						desc={<code>src/pages/dashboard/DashboardPage.js</code>}>
						SubHeaderRight
					</Popovers>
					<code>DashboardPage.js</code>
				</SubHeaderRight>
			</SubHeader>
			<Page>
				<div className='row'>
					<div className='col-12 mb-3'>
						<Popovers
							title='DashboardPage.js'
							desc={<code>src/pages/dashboard/DashboardPage.js</code>}>
							Page
						</Popovers>
						<code className='ps-3'>DashboardPage.js</code>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default DashboardPage;
