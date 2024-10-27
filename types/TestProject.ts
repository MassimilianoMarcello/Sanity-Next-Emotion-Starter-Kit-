export interface Technology {
    _id: string;
    name: string;
    slug: string;
  
  }




export type TestProject = {
name:string;
_id:string;
importance:string;
technologies: Technology[]; 

}