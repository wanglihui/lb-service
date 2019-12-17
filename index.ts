export interface ILBServiceOptions {
    endfix?: string;
    services?: {
        [index: string]: string;
    }
}

export let defaultOptions: ILBServiceOptions = {
    endfix: '',
    services: {}
}

export function init(options?: ILBServiceOptions) {
    defaultOptions = Object.assign(defaultOptions, options);
}

export function getServiceAddress(serviceName: string) {
    let address = defaultOptions.services[serviceName];
    if (address) {
        return address;
    }
    return serviceName + defaultOptions.endfix;
}