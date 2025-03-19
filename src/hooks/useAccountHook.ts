import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { toast } from "sonner";

export const useAccountHook = () => {
  const dispatch = useAppDispatch();
  const { entityId } = useAppSelector((state) => state.profile);
  const updateSettings = async (
    settings_area: string,
    value: any,
    checked: number
  ): Promise<any> => {
    try {
      // const response = axios.post<any>(`${process.env.NEXT_PUBLIC_AJAX_ENDPOINT}?action=update_settings`,
      //     {
      //         action: 'update_settings',
      //         settings_area: settings_area,
      //         value: value,
      //         entity_id: entityId,
      //         checked: checked,
      //     },
      //     // {
      //     //     headers: new HttpHeaders({
      //     //         'Content-Type': 'application/json',
      //     //     }),
      //     // }
      // )
      // return response;
      return { success: true };
    } catch (error) {
      // this.errorHandlerService.handleError(error);
      // notify('There was an error updating the settings', 'error');
      toast.error("There was an error updating the settings");
      return "There was an error updating the settings";
    }
  };
  return { updateSettings };
};
