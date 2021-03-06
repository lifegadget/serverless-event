import './common';
import 'source-map-support/register';
export interface IProcessorRequest extends AWSRequest {
    batchSize: number;
    parent: string;
    sequence: string;
}
export declare const handler: (event: IProcessorRequest, context: IContext, cb: IGatewayCallback) => void;
