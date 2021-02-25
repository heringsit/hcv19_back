import { IsString, IsNumber, IsEmail, IsPhoneNumber, Min, Max, IsDate, Length} from 'class-validator';
export class PatientDto{
    age:number
    crp:number 
    ldh:number
    hemo:number
    result:boolean
}