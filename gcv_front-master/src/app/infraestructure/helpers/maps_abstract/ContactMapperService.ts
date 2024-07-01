import { IContactMapperService } from "../maps_interfaces/IContactMapperService";

export abstract class ContactMapperService<S,T> implements IContactMapperService<S, T> {
        
    protected abstract mapFormToContact( entity: S ): T;

    transform(entity: S): T;
    transform(array: S[]): T[];
    transform(entityOfArray: S | S[]): T | T[];

    transform(entityOrArray: S | S[]): T | T[] {

        return Array.isArray( entityOrArray ) ?
                entityOrArray.map(( item: S ) => this.mapFormToContact( item )) : 
                this.mapFormToContact( entityOrArray );
    }
}
