/* Options:
Date: 2017-03-12 07:06:22
Version: 4.00
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: http://test.servicestack.net

//GlobalNamespace: 
//MakePropertiesOptional: True
//AddServiceStackTypes: True
//AddResponseStatus: False
//AddImplicitVersion: 
//AddDescriptionAsComments: True
IncludeTypes: IReturn`1,IReturnVoid,ResponseStatus,ResponseError,Authenticate,AuthenticateResponse,Hello,HelloResponse,HelloTypes,ReturnString,ReturnBytes,ReturnStream,TestAuth,TestAuthResponse,HelloReturnVoid,ThrowValidation,ThrowValidationResponse,EchoTypes
//ExcludeTypes: 
//DefaultImports: 
*/


export interface IReturnVoid
{
    createResponse() : void;
}

export interface IReturn<T>
{
    createResponse() : T;
}

// @DataContract
export class ResponseError
{
    // @DataMember(Order=1, EmitDefaultValue=false)
    errorCode: string;

    // @DataMember(Order=2, EmitDefaultValue=false)
    fieldName: string;

    // @DataMember(Order=3, EmitDefaultValue=false)
    message: string;

    // @DataMember(Order=4, EmitDefaultValue=false)
    meta: { [index:string]: string; };
}

// @DataContract
export class ResponseStatus
{
    // @DataMember(Order=1)
    errorCode: string;

    // @DataMember(Order=2)
    message: string;

    // @DataMember(Order=3)
    stackTrace: string;

    // @DataMember(Order=4)
    errors: ResponseError[];

    // @DataMember(Order=5)
    meta: { [index:string]: string; };
}

export class ThrowValidationResponse
{
    age: number;
    required: string;
    email: string;
    responseStatus: ResponseStatus;
}

export class HelloResponse
{
    result: string;
}

// @Route("/hellotypes/{Name}")
export class HelloTypes implements IReturn<HelloTypes>
{
    string: string;
    bool: boolean;
    int: number;
    createResponse() { return new HelloTypes(); }
    getTypeName() { return "HelloTypes"; }
}

export class TestAuthResponse
{
    userId: string;
    sessionId: string;
    userName: string;
    displayName: string;
    responseStatus: ResponseStatus;
}

// @Route("/echo/types")
export class EchoTypes implements IReturn<EchoTypes>
{
    byte: number;
    short: number;
    int: number;
    long: number;
    uShort: number;
    uInt: number;
    uLong: number;
    float: number;
    double: number;
    decimal: number;
    string: string;
    dateTime: string;
    timeSpan: string;
    dateTimeOffset: string;
    guid: string;
    char: string;
    createResponse() { return new EchoTypes(); }
    getTypeName() { return "EchoTypes"; }
}

// @DataContract
export class AuthenticateResponse
{
    // @DataMember(Order=1)
    userId: string;

    // @DataMember(Order=2)
    sessionId: string;

    // @DataMember(Order=3)
    userName: string;

    // @DataMember(Order=4)
    displayName: string;

    // @DataMember(Order=5)
    referrerUrl: string;

    // @DataMember(Order=6)
    bearerToken: string;

    // @DataMember(Order=7)
    responseStatus: ResponseStatus;

    // @DataMember(Order=8)
    meta: { [index:string]: string; };
}

// @Route("/throwvalidation")
export class ThrowValidation implements IReturn<ThrowValidationResponse>
{
    age: number;
    required: string;
    email: string;
    createResponse() { return new ThrowValidationResponse(); }
    getTypeName() { return "ThrowValidation"; }
}

// @Route("/hello")
// @Route("/hello/{Name}")
export class Hello implements IReturn<HelloResponse>
{
    // @Required()
    name: string;

    title: string;
    createResponse() { return new HelloResponse(); }
    getTypeName() { return "Hello"; }
}

export class HelloReturnVoid implements IReturnVoid
{
    id: number;
    createResponse() {}
    getTypeName() { return "HelloReturnVoid"; }
}

// @Route("/return/string")
export class ReturnString implements IReturn<string>
{
    data: string;
    createResponse() { return ""; }
    getTypeName() { return "ReturnString"; }
}

// @Route("/return/bytes")
export class ReturnBytes implements IReturn<Uint8Array>
{
    data: Uint8Array;
    createResponse() { return new Uint8Array(0); }
    getTypeName() { return "ReturnBytes"; }
}

// @Route("/return/stream")
export class ReturnStream implements IReturn<Blob>
{
    data: Uint8Array;
    createResponse() { return new Blob(); }
    getTypeName() { return "ReturnStream"; }
}

// @Route("/testauth")
export class TestAuth implements IReturn<TestAuthResponse>
{
    createResponse() { return new TestAuthResponse(); }
    getTypeName() { return "TestAuth"; }
}

// @Route("/auth")
// @Route("/auth/{provider}")
// @Route("/authenticate")
// @Route("/authenticate/{provider}")
// @DataContract
export class Authenticate implements IReturn<AuthenticateResponse>
{
    // @DataMember(Order=1)
    provider: string;

    // @DataMember(Order=2)
    state: string;

    // @DataMember(Order=3)
    oauth_token: string;

    // @DataMember(Order=4)
    oauth_verifier: string;

    // @DataMember(Order=5)
    userName: string;

    // @DataMember(Order=6)
    password: string;

    // @DataMember(Order=7)
    rememberMe: boolean;

    // @DataMember(Order=8)
    continue: string;

    // @DataMember(Order=9)
    nonce: string;

    // @DataMember(Order=10)
    uri: string;

    // @DataMember(Order=11)
    response: string;

    // @DataMember(Order=12)
    qop: string;

    // @DataMember(Order=13)
    nc: string;

    // @DataMember(Order=14)
    cnonce: string;

    // @DataMember(Order=15)
    useTokenCookie: boolean;

    // @DataMember(Order=16)
    accessToken: string;

    // @DataMember(Order=17)
    accessTokenSecret: string;

    // @DataMember(Order=18)
    meta: { [index:string]: string; };
    createResponse() { return new AuthenticateResponse(); }
    getTypeName() { return "Authenticate"; }
}