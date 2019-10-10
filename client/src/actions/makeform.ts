export enum MakeFormActionType {
  ADD = 'MAKEFORM/ADD',
  REMOVE = 'MAKEFORM/REMOVE',
}

export interface MakeFormAction {
  type: MakeFormActionType;
  index?: number;
}

export const add = (): MakeFormAction => ({
  type: MakeFormActionType.ADD,
});

export const remove = (index: number): MakeFormAction => ({
  index,
  type: MakeFormActionType.REMOVE,
});
