import * as React from 'react';
import Head from 'next/head';
import classNames from 'classnames';
import _ from 'lodash';
import * as React from 'react';
import { getComponent } from '../../components-registry';
import { getBaseLayoutComponent } from '../../utils/base-layout';

import { getComponent } from '@stackbit/components';

function BaseLayoutWithSEO(props) {
    const { page, site } = props;
    const siteMeta = site?.__metadata || {};
    const pageMeta = page?.__metadata || {};
    const Header = getComponent('Header');
    const Footer = getComponent('Footer');
    const seo = _.get(page, 'seo');
    const seoTitle = _.get(seo, 'title');
    const title = seoTitle ? seoTitle : [pageTitle, configTitle].join(' | ');
    const seoDescription = _.get(seo, 'description', '');
    const seoRobots = _.get(seo, 'robots', []).join(',');
    const seoExtra = _.get(seo, 'extra', []).map((meta, index) => {
        const keyName = _.get(meta, 'keyName', 'name');
        const name = _.get(meta, 'name');
        if (!name) {
            return null;
        }
        const nameAttr = { [keyName]: name };
        const relativeUrl = _.get(meta, 'relativeUrl');
        let value = _.get(meta, 'value');
        if (!value) {
            return null;
        }
        if (relativeUrl) {
            if (!domain) {
                return null;
            }
            value = domain + withPrefix(value);
        }
        return <meta key={index} {...nameAttr} content={value} />;
    });
    return (
        <div className={classNames('sb-page', pageMeta.pageCssClasses)} data-sb-object-id={pageMeta.id}>
            <div className="sb-base sb-default-base-layout">
                <Head>
                    <title>{title}</title>
                    <meta name="description" content={seoDescription} />
                    {!_.isEmpty(seoRobots) && <meta name="robots" content={seoRobots} />}
                    {seoExtra}
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                </Head>
                {site.header && <Header {...site.header} annotationPrefix={siteMeta.id} />}
                {props.children}
                {site.footer && <Footer {...site.footer} annotationPrefix={siteMeta.id} />}
            </div>
        </div>
    );
}


export default function PageLayout(props) {
    const { page, site } = props;
    const BaseLayout = getBaseLayoutComponent(page.baseLayout, site.baseLayout);
    const sections = page.sections || [];

    return (
        <BaseLayout page={page} site={site}>
            <main id="main" className="sb-layout sb-page-layout">
                {page.title && (
                    <h1 className="sr-only" data-sb-field-path="title">
                        {page.title}
                    </h1>
                )}
                {sections.length > 0 && (
                    <div data-sb-field-path="sections">
                        {sections.map((section, index) => {
                            const Component = getComponent(section.type);
                            if (!Component) {
                                throw new Error(`no component matching the page section's type: ${section.type}`);
                            }
                            return (
                                <div key={index} data-sb-field-path={`sections.${index}`}>
                                    <Component {...section} />
                                </div>
                            );
                        })}
                    </div>
                )}
            </main>
        </BaseLayout>
    );
}
