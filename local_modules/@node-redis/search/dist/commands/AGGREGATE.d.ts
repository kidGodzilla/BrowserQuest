import { RedisCommandArguments } from '@node-redis/client/dist/lib/commands';
import { TuplesObject } from '@node-redis/client/dist/lib/commands/generic-transformers';
import { PropertyName, SortByOptions } from '.';
export declare enum AggregateSteps {
    GROUPBY = "GROUPBY",
    SORTBY = "SORTBY",
    APPLY = "APPLY",
    LIMIT = "LIMIT",
    FILTER = "FILTER"
}
interface AggregateStep<T extends AggregateSteps> {
    type: T;
}
export declare enum AggregateGroupByReducers {
    COUNT = "COUNT",
    COUNT_DISTINCT = "COUNT_DISTINCT",
    COUNT_DISTINCTISH = "COUNT_DISTINCTISH",
    SUM = "SUM",
    MIN = "MIN",
    MAX = "MAX",
    AVG = "AVG",
    STDDEV = "STDDEV",
    QUANTILE = "QUANTILE",
    TOLIST = "TOLIST",
    TO_LIST = "TOLIST",
    FIRST_VALUE = "FIRST_VALUE",
    RANDOM_SAMPLE = "RANDOM_SAMPLE"
}
interface GroupByReducer<T extends AggregateGroupByReducers> {
    type: T;
    AS?: string;
}
declare type CountReducer = GroupByReducer<AggregateGroupByReducers.COUNT>;
interface CountDistinctReducer extends GroupByReducer<AggregateGroupByReducers.COUNT_DISTINCT> {
    property: PropertyName;
}
interface CountDistinctishReducer extends GroupByReducer<AggregateGroupByReducers.COUNT_DISTINCTISH> {
    property: PropertyName;
}
interface SumReducer extends GroupByReducer<AggregateGroupByReducers.SUM> {
    property: PropertyName;
}
interface MinReducer extends GroupByReducer<AggregateGroupByReducers.MIN> {
    property: PropertyName;
}
interface MaxReducer extends GroupByReducer<AggregateGroupByReducers.MAX> {
    property: PropertyName;
}
interface AvgReducer extends GroupByReducer<AggregateGroupByReducers.AVG> {
    property: PropertyName;
}
interface StdDevReducer extends GroupByReducer<AggregateGroupByReducers.STDDEV> {
    property: PropertyName;
}
interface QuantileReducer extends GroupByReducer<AggregateGroupByReducers.QUANTILE> {
    property: PropertyName;
    quantile: number;
}
interface ToListReducer extends GroupByReducer<AggregateGroupByReducers.TOLIST> {
    property: PropertyName;
}
interface FirstValueReducer extends GroupByReducer<AggregateGroupByReducers.FIRST_VALUE> {
    property: PropertyName;
    BY?: PropertyName | {
        property: PropertyName;
        direction?: 'ASC' | 'DESC';
    };
}
interface RandomSampleReducer extends GroupByReducer<AggregateGroupByReducers.RANDOM_SAMPLE> {
    property: PropertyName;
    sampleSize: number;
}
declare type GroupByReducers = CountReducer | CountDistinctReducer | CountDistinctishReducer | SumReducer | MinReducer | MaxReducer | AvgReducer | StdDevReducer | QuantileReducer | ToListReducer | FirstValueReducer | RandomSampleReducer;
interface GroupByStep extends AggregateStep<AggregateSteps.GROUPBY> {
    properties?: PropertyName | Array<PropertyName>;
    REDUCE: GroupByReducers | Array<GroupByReducers>;
}
interface SortStep extends AggregateStep<AggregateSteps.SORTBY> {
    BY: SortByOptions | Array<SortByOptions>;
    MAX?: number;
}
interface ApplyStep extends AggregateStep<AggregateSteps.APPLY> {
    expression: string;
    AS: string;
}
interface LimitStep extends AggregateStep<AggregateSteps.LIMIT> {
    from: number;
    size: number;
}
interface FilterStep extends AggregateStep<AggregateSteps.FILTER> {
    expression: string;
}
declare type LoadField = PropertyName | {
    identifier: PropertyName;
    AS?: string;
};
interface AggregateOptions {
    VERBATIM?: true;
    LOAD?: LoadField | Array<LoadField>;
    STEPS?: Array<GroupByStep | SortStep | ApplyStep | LimitStep | FilterStep>;
}
export declare function transformArguments(index: string, query: string, options?: AggregateOptions): RedisCommandArguments;
declare type AggregateRawReply = [
    total: number,
    ...results: Array<Array<string>>
];
interface AggregateReply {
    total: number;
    results: Array<TuplesObject>;
}
export declare function transformReply(rawReply: AggregateRawReply): AggregateReply;
export {};
