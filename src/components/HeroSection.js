import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';
import { getComponent} from '@stackbit/components';

const TAILWIND_MAP = {
    fontSize: {
        'x-small': 'text-xs',
        small: 'text-sm',
        medium: 'text-base',
        large: 'text-lg',
        'x-large': 'text-xl',
        'xx-large': 'text-2xl',
        'xxx-large': 'text-3xl'
    },
    fontStyle: {
        normal: 'non-italic',
        italic: 'italic'
    },
    fontWeight: {
        100: 'font-thin',
        200: 'font-extralight',
        300: 'font-light',
        400: 'font-normal',
        500: 'font-medium',
        600: 'font-semibold',
        700: 'font-bold',
        800: 'font-extrabold'
    },
    textAlign: {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
        justify: 'text-justify'
    },
    justifyContent: {
        'flex-start': 'justify-start',
        'flex-end': 'justify-end',
        center: 'justify-center'
    },
    alignItems: {
        'flex-start': 'items-start',
        'flex-end': 'items-end',
        center: 'items-center'
    },
    borderRadius: {
        none: 'rounded-none',
        'xx-small': 'rounded-sm',
        'x-small': 'rounded',
        small: 'rounded-md',
        medium: 'rounded-lg',
        large: 'rounded-xl',
        'x-large': 'rounded-2xl',
        'xx-large': 'rounded-3xl',
        full: 'rounded-full'
    },
    borderStyle: {
        none: 'border-none',
        solid: 'border-solid',
        dashed: 'border-dashed',
        dotted: 'border-dotted',
        double: 'border-double'
    },
    margin: function (value) {
        // for tailwind margins - ['twt0:16', 'twb0:16'], the value will be array ['mt-0', 'mb-4']
        if (Array.isArray(value)) {
            return value.join(' ');
        }
        // for regular margins - ['x0:8', 'y0:16'], the value will be object: { left: 4, top: 10 }
        // this object can not be converted into classes and needs to be handled differently
        console.warn('cannot convert "margin" style field value to class name');
        return '';
    }
};

export function mapStyles(styles) {
    return Object.entries(styles)
        .map(([prop, value]) => {
            if (prop in TAILWIND_MAP) {
                if (typeof TAILWIND_MAP[prop] === 'function') {
                    return TAILWIND_MAP[prop](value);
                } else if (value in TAILWIND_MAP[prop]) {
                    return TAILWIND_MAP[prop][value];
                }
            } else {
                // if prop or value don't exist in the map, use the value as is,
                // useful for direct color values.
                return value;
            }
        })
        .join(' ');
}


export default function HeroSection(props) {
    const cssId = props.elementId || null;
    const colors = props.colors || 'colors-a';
    const sectionStyles = props.styles?.self || {};
    const sectionBorderWidth = sectionStyles.borderWidth ? sectionStyles.borderWidth : 0;
    return (
        <div
            id={cssId}
            className={classNames(
                'sb-component',
                'sb-component-section',
                'sb-component-hero-section',
                colors,
                'flex',
                'flex-col',
                'justify-center',
                'relative',
                sectionStyles.height ? mapMinHeightStyles(sectionStyles.height) : null,
                sectionStyles.margin,
                sectionStyles.padding,
                sectionStyles.borderColor,
                sectionStyles.borderRadius ? mapStyles({ borderRadius: sectionStyles.borderRadius }) : null,
                sectionStyles.borderStyle ? mapStyles({ borderStyle: sectionStyles.borderStyle }) : null
            )}
            style={{
                borderWidth: `${sectionBorderWidth}px`
            }}
        >
            {props.backgroundImage && heroBackgroundImage(props.backgroundImage)}
            <div
                className={classNames(
                    'flex',
                    'relative',
                    'w-full',
                    sectionStyles.justifyContent ? mapStyles({ justifyContent: sectionStyles.justifyContent }) : null
                )}
            >
                <div className={classNames('w-full', sectionStyles.width ? mapMaxWidthStyles(sectionStyles.width) : null)}>
                    <div
                        className={classNames(
                            'flex',
                            '-mx-4',
                            sectionStyles.flexDirection ? mapFlexDirectionStyles(sectionStyles.flexDirection) : null,
                            sectionStyles.alignItems ? mapStyles({ alignItems: sectionStyles.alignItems }) : null
                        )}
                    >
                        <div className="my-3 flex-1 px-4 w-full">
                            {heroBody(props)}
                            {heroActions(props)}
                            {heroBottomPart(props)}
                        </div>
                        {props.media && (
                            <div className="my-3 flex-1 px-4 w-full">
                                <div data-sb-field-path=".media">{heroMedia(props.media)}</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function heroMedia(media) {
    const mediaType = media.type;
    if (!mediaType) {
        throw new Error(`hero section media does not have the 'type' property`);
    }
    const Media = getComponent(mediaType);
    if (!Media) {
        throw new Error(`no component matching the hero section media type: ${mediaType}`);
    }
    return <Media {...media} />;
}

function heroBackgroundImage(image) {
    const imageUrl = image.url;
    if (!imageUrl) {
        return null;
    }
    const imageStyles = image.styles?.self || {};
    const imageOpacity = imageStyles.opacity || imageStyles.opacity === 0 ? imageStyles.opacity : 100;
    return (
        <div
            className="bg-cover bg-center block absolute inset-0"
            style={{
                backgroundImage: `url('${imageUrl}')`,
                opacity: imageOpacity * 0.01
            }}
        />
    );
}

function heroBody(props) {
    const styles = props.styles || {};
    return (
        <div>
            {props.title && (
                <h2 className={classNames(styles.title ? mapStyles(styles.title) : null)} data-sb-field-path=".title">
                    {props.title}
                </h2>
            )}
            {props.subtitle && (
                <p
                    className={classNames('text-xl', 'sm:text-2xl', styles.subtitle ? mapStyles(styles.subtitle) : null, { 'mt-4': props.title })}
                    data-sb-field-path=".subtitle"
                >
                    {props.subtitle}
                </p>
            )}
            {props.text && (
                <Markdown
                    options={{ forceBlock: true, forceWrapper: true }}
                    className={classNames('sb-markdown', 'sm:text-lg', styles.text ? mapStyles(styles.text) : null, { 'mt-6': props.title || props.subtitle })}
                    data-sb-field-path=".text"
                >
                    {props.text}
                </Markdown>
            )}
        </div>
    );
}

function heroBottomPart(props) {
    const bottomPart = props.bottomPart;
    return (
        bottomPart ? <div
            className={classNames('flex', 'flex-wrap', 'items-center', '-mx-2')}
        >
            {bottomPart}
        </div> : null

    );
}

function heroActions(props) {
    const actions = props.actions || [];
    if (actions.length === 0) {
        return null;
    }
    const styles = props.styles || {};
    const Action = getComponent('Action');
    return (
        <div
            className={classNames('flex', 'flex-wrap', 'items-center', '-mx-2', styles.actions ? mapStyles(styles.actions) : null, {
                'mt-8': props.title || props.subtitle || props.text
            })}
            data-sb-field-path=".actions"
        >
            {actions.map((action, index) => (
                <Action key={index} {...action} className="mb-3 mx-2 lg:whitespace-nowrap" data-sb-field-path={`.${index}`} />
            ))}
        </div>
    );
}

function mapMinHeightStyles(height) {
    switch (height) {
        case 'auto':
            return 'min-h-0';
        case 'screen':
            return 'min-h-screen';
    }
    return null;
}

function mapMaxWidthStyles(width) {
    switch (width) {
        case 'narrow':
            return 'max-w-screen-md';
        case 'wide':
            return 'max-w-screen-xl';
        case 'full':
            return 'max-w-full';
    }
    return null;
}

function mapFlexDirectionStyles(flexDirection) {
    switch (flexDirection) {
        case 'row':
            return ['flex-col', 'lg:flex-row'];
        case 'row-reverse':
            return ['flex-col-reverse', 'lg:flex-row-reverse'];
        case 'col':
            return ['flex-col'];
        case 'col-reverse':
            return ['flex-col-reverse'];
    }
    return null;
}
