export enum FormQuestionEnum {
    ESTIMATE_REFUND = "ESTIMATE_REFUND",
    ANNUAL_INCOME = "ANNUAL_INCOME",
    FULL_YEAR_WORK = "FULL_YEAR_WORK",
    WORK_DISTANCE = "WORK_DISTANCE",
    FURTHER_EDUCATION = "FURTHER_EDUCATION",
    CHILDREN_COUNT = "CHILDREN_COUNT",
    FAMILY_BONUS = "FAMILY_BONUS"
  }
  
  export enum FormAnswerValueEnum {
    START = "start",
    INCOME_0_12K = "0-12k",
    INCOME_13K_19K = "13k-19k",
    INCOME_20K_34K = "20k-34k",
    INCOME_35K_66K = "35k-66k",
    INCOME_67K_99K = "67k-99k",
    INCOME_OVER_100K = "over-100k",
    YES = "yes",
    NO = "no",
    UNDER_2KM = "under-2km",
    RANGE_2_19KM = "2-19km",
    RANGE_20_39KM = "20-39km",
    RANGE_40_59KM = "40-59km",
    OVER_60KM = "over-60km",
    CHILDREN_0 = "0",
    CHILDREN_1 = "1",
    CHILDREN_2 = "2",
    CHILDREN_3_OR_MORE = "3+"
  }
  
  export enum NavigationConditionType {
    STATIC = "static"
  }
  
  
  export type FormOption = {
    value: string;
    title: {
      de: string;
    };
  };
  
  export type FormNavigation = {
    conditionType: NavigationConditionType;
    condition: string;
    next: FormQuestionEnum;
  };
  
  export type FormQuestion<T extends FormAnswerValueEnum> = {
    enum: FormQuestionEnum;
    component: "options";
    answer: T | "";
    valid: boolean;
    title: {
      de: string;
    };
    options: FormOption[];
    navigation: FormNavigation[];
  };
  
  export type Form = {
    title: string;
    questions: Array<FormQuestion<FormAnswerValueEnum>>;
  };
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  type QuestionAnswerMap = {
    [FormQuestionEnum.ESTIMATE_REFUND]: FormAnswerValueEnum.START;
    [FormQuestionEnum.ANNUAL_INCOME]:
      | FormAnswerValueEnum.INCOME_0_12K
      | FormAnswerValueEnum.INCOME_13K_19K
      | FormAnswerValueEnum.INCOME_20K_34K
      | FormAnswerValueEnum.INCOME_35K_66K
      | FormAnswerValueEnum.INCOME_67K_99K
      | FormAnswerValueEnum.INCOME_OVER_100K;
    [FormQuestionEnum.FULL_YEAR_WORK]: FormAnswerValueEnum.YES | FormAnswerValueEnum.NO;
    [FormQuestionEnum.WORK_DISTANCE]:
      | FormAnswerValueEnum.UNDER_2KM
      | FormAnswerValueEnum.RANGE_2_19KM
      | FormAnswerValueEnum.RANGE_20_39KM
      | FormAnswerValueEnum.RANGE_40_59KM
      | FormAnswerValueEnum.OVER_60KM;
    [FormQuestionEnum.FURTHER_EDUCATION]: FormAnswerValueEnum.YES | FormAnswerValueEnum.NO;
    [FormQuestionEnum.CHILDREN_COUNT]:
      | FormAnswerValueEnum.CHILDREN_0
      | FormAnswerValueEnum.CHILDREN_1
      | FormAnswerValueEnum.CHILDREN_2
      | FormAnswerValueEnum.CHILDREN_3_OR_MORE;
    [FormQuestionEnum.FAMILY_BONUS]: FormAnswerValueEnum.YES | FormAnswerValueEnum.NO;
  };
  