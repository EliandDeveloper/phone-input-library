export interface CountryInfo {
    name: string;
    code: string;
    maxLength: number;
    format: number[];
  }
  
  const NORTH_AMERICA: Record<string, CountryInfo> = {
    USA: { name: 'Estados Unidos', code: '+1', maxLength: 10, format: [3, 3, 4] },
    Canada: { name: 'Canadá', code: '+1', maxLength: 10, format: [3, 3, 4] },
    Mexico: { name: 'México', code: '+52', maxLength: 10, format: [2, 4, 4] },
  };
  
  const SOUTH_AMERICA: Record<string, CountryInfo> = {
    Venezuela: { name: 'Venezuela', code: '+58', maxLength: 11, format: [4, 3, 4] },
    Colombia: { name: 'Colombia', code: '+57', maxLength: 10, format: [3, 3, 4] },
    Argentina: { name: 'Argentina', code: '+54', maxLength: 10, format: [3, 3, 4] },
    Chile: { name: 'Chile', code: '+56', maxLength: 9, format: [3, 3, 3] },
    Peru: { name: 'Perú', code: '+51', maxLength: 9, format: [3, 3, 3] },
    Ecuador: { name: 'Ecuador', code: '+593', maxLength: 9, format: [3, 3, 3] },
    Bolivia: { name: 'Bolivia', code: '+591', maxLength: 8, format: [2, 3, 3] },
    Uruguay: { name: 'Uruguay', code: '+598', maxLength: 9, format: [3, 3, 3] },
    Paraguay: { name: 'Paraguay', code: '+595', maxLength: 9, format: [3, 3, 3] },
    Brazil: { name: 'Brasil', code: '+55', maxLength: 11, format: [2, 5, 4] },
    DominicanRepublic: { name: 'República Dominicana', code: '+1', maxLength: 10, format: [3, 3, 4] },
  };
  
  const EUROPE: Record<string, CountryInfo> = {
    Spain: { name: 'España', code: '+34', maxLength: 9, format: [3, 3, 3] },
    France: { name: 'Francia', code: '+33', maxLength: 9, format: [1, 2, 2, 2, 2] },
    Germany: { name: 'Alemania', code: '+49', maxLength: 11, format: [3, 4, 4] },
    Italy: { name: 'Italia', code: '+39', maxLength: 10, format: [3, 3, 4] },
    UnitedKingdom: { name: 'Reino Unido', code: '+44', maxLength: 10, format: [5, 5] },
  };
  
  const ASIA_PACIFIC: Record<string, CountryInfo> = {
    India: { name: 'India', code: '+91', maxLength: 10, format: [5, 5] },
    China: { name: 'China', code: '+86', maxLength: 11, format: [3, 4, 4] },
    Japan: { name: 'Japón', code: '+81', maxLength: 10, format: [2, 4, 4] },
    Australia: { name: 'Australia', code: '+61', maxLength: 9, format: [1, 4, 4] },
    SouthKorea: { name: 'Corea del Sur', code: '+82', maxLength: 9, format: [3, 3, 3] },
    Singapore: { name: 'Singapur', code: '+65', maxLength: 8, format: [4, 4] },
    HongKong: { name: 'Hong Kong', code: '+852', maxLength: 8, format: [4, 4] },
    Malaysia: { name: 'Malasia', code: '+60', maxLength: 10, format: [3, 3, 4] },
  };
  
  export const DEFAULT_COUNTRY_INFO: Record<string, CountryInfo> = {
    ...SOUTH_AMERICA,
    ...NORTH_AMERICA,
    ...EUROPE,
    ...ASIA_PACIFIC,
  };
  