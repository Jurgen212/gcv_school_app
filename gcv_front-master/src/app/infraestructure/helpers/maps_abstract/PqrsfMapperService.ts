import { IPqrsfMapperService } from "../maps_interfaces/IPqrsfMapperService";


export abstract class PqrsfMapperService<S,T> implements IPqrsfMapperService<S, T> {
        
    protected abstract mapObjectToPQRSF( entity: S ): T;

    transform(entity: S): T;
    transform(array: S[]): T[];
    transform(entityOfArray: S | S[]): T | T[];

    transform(entityOrArray: S | S[]): T | T[] {

        return Array.isArray( entityOrArray ) ?
                entityOrArray.map(( item: S ) => this.mapObjectToPQRSF( item )) : 
                this.mapObjectToPQRSF( entityOrArray );
    }
}
