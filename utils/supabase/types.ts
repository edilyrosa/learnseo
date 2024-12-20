// utils/supabase/types.ts

export type Database = {
    public: {
      Tables: {
        users: {
          Row: {
            id: string;
            email: string;
            created_at: string;
          };
          Insert: {
            id: string;
            email: string;
            created_at: string;
          };
          Update: {
            email: string;
          };
        };
      };
    };
  };
  