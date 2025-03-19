import { Service } from "@/interfaces/general";
import { executeQuery } from "../database/mysql/queryHelper";

/**
 * Retrieves the name of a service based on the provided service ID.
 * @async
 * @param {number} serviceId - The unique identifier of the service.
 * @param {Record<string, any>} [options={}] - Optional parameters to modify the query.
 * @returns {Promise<string | false>} - A promise that resolves to the service name or `false` if the service is not found.
 */
export const getServiceName = async (
  serviceId: number,
  options: Record<string, any> = {}
): Promise<string | false> => {
  const sqlQuery = `
        SELECT service_name
        FROM proz.services
        WHERE service_id = ?
        `;

  // Execute the query using the executeQuery function
  const results: { service_name: string }[] = (await executeQuery(sqlQuery, "slave", [serviceId], {
    useCache: true,
  })) as any[];
  return results.length > 0 ? results[0].service_name : false;
};

/**
 * Retrieves services associated with a given entity.
 * @async
 * @param {number} entityId - The unique identifier of the entity.
 * @param {Record<string, any>} [options={}] - Optional parameters to modify the query.
 * @returns {Promise<Service | false>} - A promise that resolves to the service data or `false` if no services are found.
 */
export const entityGetServices = async (
  entityId: number,
  options: Record<string, any> = {}
): Promise<Service | false> => {
  const services: Service = {};
  // SQL query to get service IDs for a given entity
  const sqlQuery = `
            SELECT service_id 
            FROM proz.entity_services 
            WHERE entity_id = ?
            ORDER BY sort_order, service_id
        `;

  // Execute the query using the executeQuery function
  const results: { service_id: number }[] = (await executeQuery(sqlQuery, "slave", [
    entityId,
  ])) as any[];
  // Iterate over the result and fetch service names
  for (const row of results) {
    services[row.service_id] = (await getServiceName(row.service_id)) as string;
  }
  return services ? services : false;
};
