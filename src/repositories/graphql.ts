import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
import { graphql, type GraphQLResponseResolver, type RequestHandlerOptions } from 'msw'
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Continent = {
  __typename?: 'Continent';
  code: Scalars['ID']['output'];
  countries: Array<Country>;
  name: Scalars['String']['output'];
};

export type ContinentFilterInput = {
  code?: InputMaybe<StringQueryOperatorInput>;
};

export type Country = {
  __typename?: 'Country';
  awsRegion: Scalars['String']['output'];
  capital?: Maybe<Scalars['String']['output']>;
  code: Scalars['ID']['output'];
  continent: Continent;
  currencies: Array<Scalars['String']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  emoji: Scalars['String']['output'];
  emojiU: Scalars['String']['output'];
  languages: Array<Language>;
  name: Scalars['String']['output'];
  native: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  phones: Array<Scalars['String']['output']>;
  states: Array<State>;
  subdivisions: Array<Subdivision>;
};


export type CountryNameArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
};

export type CountryFilterInput = {
  code?: InputMaybe<StringQueryOperatorInput>;
  continent?: InputMaybe<StringQueryOperatorInput>;
  currency?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
};

export type Language = {
  __typename?: 'Language';
  code: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  native: Scalars['String']['output'];
  rtl: Scalars['Boolean']['output'];
};

export type LanguageFilterInput = {
  code?: InputMaybe<StringQueryOperatorInput>;
};

export type Query = {
  __typename?: 'Query';
  continent?: Maybe<Continent>;
  continents: Array<Continent>;
  countries: Array<Country>;
  country?: Maybe<Country>;
  language?: Maybe<Language>;
  languages: Array<Language>;
};


export type QueryContinentArgs = {
  code: Scalars['ID']['input'];
};


export type QueryContinentsArgs = {
  filter?: InputMaybe<ContinentFilterInput>;
};


export type QueryCountriesArgs = {
  filter?: InputMaybe<CountryFilterInput>;
};


export type QueryCountryArgs = {
  code: Scalars['ID']['input'];
};


export type QueryLanguageArgs = {
  code: Scalars['ID']['input'];
};


export type QueryLanguagesArgs = {
  filter?: InputMaybe<LanguageFilterInput>;
};

export type State = {
  __typename?: 'State';
  code?: Maybe<Scalars['String']['output']>;
  country: Country;
  name: Scalars['String']['output'];
};

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nin?: InputMaybe<Array<Scalars['String']['input']>>;
  regex?: InputMaybe<Scalars['String']['input']>;
};

export type Subdivision = {
  __typename?: 'Subdivision';
  code: Scalars['ID']['output'];
  emoji?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

export type CountryFragmentFragment = { __typename?: 'Country', capital?: string | null, code: string, currencies: Array<string>, emoji: string, name: string, phones: Array<string>, continent: { __typename?: 'Continent', code: string, name: string }, languages: Array<{ __typename?: 'Language', code: string, name: string, rtl: boolean }>, states: Array<{ __typename?: 'State', name: string }> };

export type ListCountriesQueryVariables = Exact<{ [key: string]: never; }>;


export type ListCountriesQuery = { __typename?: 'Query', countries: Array<{ __typename?: 'Country', capital?: string | null, code: string, currencies: Array<string>, emoji: string, name: string, phones: Array<string>, continent: { __typename?: 'Continent', code: string, name: string }, languages: Array<{ __typename?: 'Language', code: string, name: string, rtl: boolean }>, states: Array<{ __typename?: 'State', name: string }> }> };

export type ListCountriesByCodeQueryVariables = Exact<{
  code?: InputMaybe<Scalars['String']['input']>;
}>;


export type ListCountriesByCodeQuery = { __typename?: 'Query', countries: Array<{ __typename?: 'Country', capital?: string | null, code: string, currencies: Array<string>, emoji: string, name: string, phones: Array<string>, continent: { __typename?: 'Continent', code: string, name: string }, languages: Array<{ __typename?: 'Language', code: string, name: string, rtl: boolean }>, states: Array<{ __typename?: 'State', name: string }> }> };

export const CountryFragmentFragmentDoc = gql`
    fragment CountryFragment on Country {
  capital
  code
  continent {
    code
    name
  }
  currencies
  emoji
  languages {
    code
    name
    rtl
  }
  name
  phones
  states {
    name
  }
}
    `;
export const ListCountriesDocument = gql`
    query ListCountries {
  countries {
    ...CountryFragment
  }
}
    ${CountryFragmentFragmentDoc}`;
export const ListCountriesByCodeDocument = gql`
    query ListCountriesByCode($code: String) {
  countries(filter: {code: {eq: $code}}) {
    ...CountryFragment
  }
}
    ${CountryFragmentFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    ListCountries(variables?: ListCountriesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ListCountriesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ListCountriesQuery>(ListCountriesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ListCountries', 'query', variables);
    },
    ListCountriesByCode(variables?: ListCountriesByCodeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ListCountriesByCodeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ListCountriesByCodeQuery>(ListCountriesByCodeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ListCountriesByCode', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockListCountriesQuery(
 *   ({ query, variables }) => {
 *     return HttpResponse.json({
 *       data: { countries }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockListCountriesQuery = (resolver: GraphQLResponseResolver<ListCountriesQuery, ListCountriesQueryVariables>, options?: RequestHandlerOptions) =>
  graphql.query<ListCountriesQuery, ListCountriesQueryVariables>(
    'ListCountries',
    resolver,
    options
  )

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockListCountriesByCodeQuery(
 *   ({ query, variables }) => {
 *     const { code } = variables;
 *     return HttpResponse.json({
 *       data: { countries }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockListCountriesByCodeQuery = (resolver: GraphQLResponseResolver<ListCountriesByCodeQuery, ListCountriesByCodeQueryVariables>, options?: RequestHandlerOptions) =>
  graphql.query<ListCountriesByCodeQuery, ListCountriesByCodeQueryVariables>(
    'ListCountriesByCode',
    resolver,
    options
  )


export const mockContinent = (overrides?: Partial<Continent>): Continent => {
    return {
        code: overrides && overrides.hasOwnProperty('code') ? overrides.code! : 'f673fda4-db5d-447a-9fb7-b157432ef0fc',
        countries: overrides && overrides.hasOwnProperty('countries') ? overrides.countries! : [mockCountry()],
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'nesciunt',
    };
};

export const mockContinentFilterInput = (overrides?: Partial<ContinentFilterInput>): ContinentFilterInput => {
    return {
        code: overrides && overrides.hasOwnProperty('code') ? overrides.code! : mockStringQueryOperatorInput(),
    };
};

export const mockCountry = (overrides?: Partial<Country>): Country => {
    return {
        awsRegion: overrides && overrides.hasOwnProperty('awsRegion') ? overrides.awsRegion! : 'ullam',
        capital: overrides && overrides.hasOwnProperty('capital') ? overrides.capital! : 'deleniti',
        code: overrides && overrides.hasOwnProperty('code') ? overrides.code! : 'f295a71f-804f-40bc-a85f-bc68f5bec94e',
        continent: overrides && overrides.hasOwnProperty('continent') ? overrides.continent! : mockContinent(),
        currencies: overrides && overrides.hasOwnProperty('currencies') ? overrides.currencies! : ['alias'],
        currency: overrides && overrides.hasOwnProperty('currency') ? overrides.currency! : 'laboriosam',
        emoji: overrides && overrides.hasOwnProperty('emoji') ? overrides.emoji! : 'id',
        emojiU: overrides && overrides.hasOwnProperty('emojiU') ? overrides.emojiU! : 'dolorum',
        languages: overrides && overrides.hasOwnProperty('languages') ? overrides.languages! : [mockLanguage()],
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'fugit',
        native: overrides && overrides.hasOwnProperty('native') ? overrides.native! : 'soluta',
        phone: overrides && overrides.hasOwnProperty('phone') ? overrides.phone! : 'numquam',
        phones: overrides && overrides.hasOwnProperty('phones') ? overrides.phones! : ['nobis'],
        states: overrides && overrides.hasOwnProperty('states') ? overrides.states! : [mockState()],
        subdivisions: overrides && overrides.hasOwnProperty('subdivisions') ? overrides.subdivisions! : [mockSubdivision()],
    };
};

export const mockCountryFilterInput = (overrides?: Partial<CountryFilterInput>): CountryFilterInput => {
    return {
        code: overrides && overrides.hasOwnProperty('code') ? overrides.code! : mockStringQueryOperatorInput(),
        continent: overrides && overrides.hasOwnProperty('continent') ? overrides.continent! : mockStringQueryOperatorInput(),
        currency: overrides && overrides.hasOwnProperty('currency') ? overrides.currency! : mockStringQueryOperatorInput(),
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : mockStringQueryOperatorInput(),
    };
};

export const mockLanguage = (overrides?: Partial<Language>): Language => {
    return {
        code: overrides && overrides.hasOwnProperty('code') ? overrides.code! : '11fdf88a-b706-4662-8daa-787b25469fec',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'et',
        native: overrides && overrides.hasOwnProperty('native') ? overrides.native! : 'possimus',
        rtl: overrides && overrides.hasOwnProperty('rtl') ? overrides.rtl! : true,
    };
};

export const mockLanguageFilterInput = (overrides?: Partial<LanguageFilterInput>): LanguageFilterInput => {
    return {
        code: overrides && overrides.hasOwnProperty('code') ? overrides.code! : mockStringQueryOperatorInput(),
    };
};

export const mockQuery = (overrides?: Partial<Query>): Query => {
    return {
        continent: overrides && overrides.hasOwnProperty('continent') ? overrides.continent! : mockContinent(),
        continents: overrides && overrides.hasOwnProperty('continents') ? overrides.continents! : [mockContinent()],
        countries: overrides && overrides.hasOwnProperty('countries') ? overrides.countries! : [mockCountry()],
        country: overrides && overrides.hasOwnProperty('country') ? overrides.country! : mockCountry(),
        language: overrides && overrides.hasOwnProperty('language') ? overrides.language! : mockLanguage(),
        languages: overrides && overrides.hasOwnProperty('languages') ? overrides.languages! : [mockLanguage()],
    };
};

export const mockState = (overrides?: Partial<State>): State => {
    return {
        code: overrides && overrides.hasOwnProperty('code') ? overrides.code! : 'modi',
        country: overrides && overrides.hasOwnProperty('country') ? overrides.country! : mockCountry(),
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'quidem',
    };
};

export const mockStringQueryOperatorInput = (overrides?: Partial<StringQueryOperatorInput>): StringQueryOperatorInput => {
    return {
        eq: overrides && overrides.hasOwnProperty('eq') ? overrides.eq! : 'velit',
        in: overrides && overrides.hasOwnProperty('in') ? overrides.in! : ['sed'],
        ne: overrides && overrides.hasOwnProperty('ne') ? overrides.ne! : 'fugiat',
        nin: overrides && overrides.hasOwnProperty('nin') ? overrides.nin! : ['omnis'],
        regex: overrides && overrides.hasOwnProperty('regex') ? overrides.regex! : 'esse',
    };
};

export const mockSubdivision = (overrides?: Partial<Subdivision>): Subdivision => {
    return {
        code: overrides && overrides.hasOwnProperty('code') ? overrides.code! : '5c4dbe51-606c-41b2-bea3-a0af4a2d7e2c',
        emoji: overrides && overrides.hasOwnProperty('emoji') ? overrides.emoji! : 'nisi',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'rerum',
    };
};
