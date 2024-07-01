import { IDataFromDBServiceMapper } from "../maps_interfaces/IDataFromDBServiceMapper";

export abstract class AMapperDataFromDBToTemplateServ<S,T> implements IDataFromDBServiceMapper<S, T> {
        
    protected abstract mapDBToDataTemplate( entity: S ): T;

    transform(entity: S): T;
    transform(array: S[]): T[];
    transform(entityOfArray: S | S[]): T | T[];

    transform(entityOrArray: S | S[]): T | T[] {

        return Array.isArray( entityOrArray ) ?
                entityOrArray.map(( item: S ) => this.mapDBToDataTemplate( item )) : 
                this.mapDBToDataTemplate( entityOrArray );
    }
}
