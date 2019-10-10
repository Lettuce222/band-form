export enum FormElementActionType {
  REMOVE = 'FORMELEMENT/REMOVE',
}

export interface MakeFormAction {
  type: FormElementActionType;
  index?: number;
}

export const remove = (): MakeFormAction => ({
  type: FormElementActionType.REMOVE,
});
