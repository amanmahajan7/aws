import { Aws } from './aws';

export interface AwsGroup {
    title: string;
    services: Aws[];
}