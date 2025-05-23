import type {
  __experimental_CancelSubscriptionParams,
  __experimental_CommerceSubscriptionJSON,
  __experimental_CommerceSubscriptionPlanPeriod,
  __experimental_CommerceSubscriptionResource,
  __experimental_CommerceSubscriptionStatus,
  DeletedObjectJSON,
} from '@clerk/types';

import { __experimental_CommercePlan, BaseResource, DeletedObject } from './internal';

export class __experimental_CommerceSubscription
  extends BaseResource
  implements __experimental_CommerceSubscriptionResource
{
  id!: string;
  paymentSourceId!: string;
  plan!: __experimental_CommercePlan;
  planPeriod!: __experimental_CommerceSubscriptionPlanPeriod;
  status!: __experimental_CommerceSubscriptionStatus;

  constructor(data: __experimental_CommerceSubscriptionJSON) {
    super();
    this.fromJSON(data);
  }

  protected fromJSON(data: __experimental_CommerceSubscriptionJSON | null): this {
    if (!data) {
      return this;
    }

    this.id = data.id;
    this.paymentSourceId = data.payment_source_id;
    this.plan = new __experimental_CommercePlan(data.plan);
    this.planPeriod = data.plan_period;
    this.status = data.status;

    return this;
  }

  public async cancel(params: __experimental_CancelSubscriptionParams) {
    const { orgId } = params;
    const json = (
      await BaseResource._fetch({
        path: orgId
          ? `/organizations/${orgId}/commerce/subscriptions/${this.id}`
          : `/me/commerce/subscriptions/${this.id}`,
        method: 'DELETE',
      })
    )?.response as unknown as DeletedObjectJSON;

    return new DeletedObject(json);
  }
}
