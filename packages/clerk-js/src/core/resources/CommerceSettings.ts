import type {
  __experimental_CommerceSettingsJSON,
  __experimental_CommerceSettingsJSONSnapshot,
  __experimental_CommerceSettingsResource,
} from '@clerk/types';

import { BaseResource } from './internal';

/**
 * @internal
 */
export class __experimental_CommerceSettings extends BaseResource implements __experimental_CommerceSettingsResource {
  billing = {
    stripePublishableKey: '',
    enabled: false,
  };

  public constructor(
    data: __experimental_CommerceSettingsJSON | __experimental_CommerceSettingsJSONSnapshot | null = null,
  ) {
    super();
    this.fromJSON(data);
  }

  protected fromJSON(
    data: __experimental_CommerceSettingsJSON | __experimental_CommerceSettingsJSONSnapshot | null,
  ): this {
    if (!data) {
      return this;
    }

    // TODO(@commerce): Remove `?.` once we launch.
    this.billing.stripePublishableKey = data?.billing?.stripe_publishable_key || '';
    this.billing.enabled = data?.billing?.enabled || false;

    return this;
  }

  public __internal_toSnapshot(): __experimental_CommerceSettingsJSONSnapshot {
    return {
      billing: {
        stripe_publishable_key: this.billing.stripePublishableKey,
        enabled: this.billing.enabled,
      },
    } as unknown as __experimental_CommerceSettingsJSONSnapshot;
  }
}
