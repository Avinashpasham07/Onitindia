import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({
    title,
    description,
    name = 'OnIT India',
    type = 'website',
    keywords,
    canonical,
    schema
}) {
    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{title ? `${title} | OnIT India` : 'OnIT India | Flexible Local Work & Campus Tasks'}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            {canonical && <link rel="canonical" href={canonical} />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title || 'OnIT India'} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content={name} />

            {/* Structured Data (JSON-LD) */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
}
