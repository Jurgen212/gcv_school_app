import { IDataDropMapperService } from "../maps_interfaces/IDataDropMapperService";


export abstract class DataDropMapperService<S,T> implements IDataDropMapperService<S, T> {
        
    protected abstract mapObjectToDataDrop( entity: S ): T;

    transform(entity: S): T;
    transform(array: S[]): T[];
    transform(entityOfArray: S | S[]): T | T[];

    transform(entityOrArray: S | S[]): T | T[] {

        return Array.isArray( entityOrArray ) ?
                entityOrArray.map(( item: S ) => this.mapObjectToDataDrop( item )) : 
                this.mapObjectToDataDrop( entityOrArray );
    }
}
