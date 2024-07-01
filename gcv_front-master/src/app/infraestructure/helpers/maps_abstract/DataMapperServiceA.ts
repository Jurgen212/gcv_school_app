import { IDataMapperService } from "../maps_interfaces/IDataMapperService";


export abstract class DataMapperService<S,T> implements IDataMapperService<S, T> {
        
    protected abstract mapNoticeToData( entity: S ): T;

    transform(entity: S): T;
    transform(array: S[]): T[];
    transform(entityOfArray: S | S[]): T | T[];

    transform(entityOrArray: S | S[]): T | T[] {

        return Array.isArray( entityOrArray ) ?
                entityOrArray.map(( item: S ) => this.mapNoticeToData( item )) : 
                this.mapNoticeToData( entityOrArray );
    }
}
