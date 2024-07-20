import type { Struct, Schema } from '@strapi/strapi';

export interface LinkTextLink extends Struct.ComponentSchema {
  collectionName: 'components_link_text_links';
  info: {
    displayName: 'Text Link';
    icon: 'link';
    description: '';
  };
  attributes: {
    text: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    url: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<'https://'>;
  };
}

export interface LinkIconLink extends Struct.ComponentSchema {
  collectionName: 'components_link_icon_links';
  info: {
    displayName: 'Icon Link';
    icon: 'link';
    description: '';
  };
  attributes: {
    icon: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    alt: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    url: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<'https://'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'link.text-link': LinkTextLink;
      'link.icon-link': LinkIconLink;
    }
  }
}
