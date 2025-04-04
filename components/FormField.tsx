import { FormControl,FormDescription,FormLabel,FormItem,FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Controller, FieldValues,Path,Control} from "react-hook-form";

interface FormFieldProps<T extends FieldValues>{
    control: Control<T>;
    name: Path<T>;
    label:string;
    placeholder?:string;
    type?: 'text' | 'email' | 'password' | 'file';
}

const FormField = <T extends FieldValues>({
    control,
    name,
    label,
    placeholder,
    type = "text",
  }: FormFieldProps<T>) => (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem>
          <FormLabel className="label">{label}</FormLabel>
          <FormControl>
            <Input className="input" type={type} placeholder={placeholder} {...field} />
          </FormControl>
          
          {/* Show password requirements only if this is the password field */}
          {name === "password" && (
            <FormDescription>
              Password must be at least 5 characters long.
            </FormDescription>
          )}
  
          <FormMessage>{fieldState.error?.message}</FormMessage>
        </FormItem>
      )}
    />
  );
  
export default FormField