export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  public: {
    Tables: {
      bookmarks: {
        Row: {
          created_at: string | null;
          feed_id: number;
          id: number;
          user_id: string;
        };
        Insert: {
          created_at?: string | null;
          feed_id: number;
          id?: never;
          user_id: string;
        };
        Update: {
          created_at?: string | null;
          feed_id?: number;
          id?: never;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'bookmarks_feed_id_fkey';
            columns: ['feed_id'];
            isOneToOne: false;
            referencedRelation: 'feeds';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'bookmarks_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      comments: {
        Row: {
          content: string;
          created_at: string | null;
          feed_id: number;
          id: number;
          updated_at: string | null;
          user_id: string;
        };
        Insert: {
          content: string;
          created_at?: string | null;
          feed_id: number;
          id?: never;
          updated_at?: string | null;
          user_id: string;
        };
        Update: {
          content?: string;
          created_at?: string | null;
          feed_id?: number;
          id?: never;
          updated_at?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'comments_feed_id_fkey';
            columns: ['feed_id'];
            isOneToOne: false;
            referencedRelation: 'feeds';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'comments_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      feed_tags: {
        Row: {
          feed_id: number;
          tag_id: number;
        };
        Insert: {
          feed_id: number;
          tag_id: number;
        };
        Update: {
          feed_id?: number;
          tag_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: 'feed_tags_feed_id_fkey';
            columns: ['feed_id'];
            isOneToOne: false;
            referencedRelation: 'feeds';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'feed_tags_tag_id_fkey';
            columns: ['tag_id'];
            isOneToOne: false;
            referencedRelation: 'tags';
            referencedColumns: ['id'];
          },
        ];
      };
      feeds: {
        Row: {
          created_at: string | null;
          description: string | null;
          downvotes: number | null;
          id: number;
          og_image_url: string | null;
          og_url: string | null;
          origin_url: string | null;
          title: string;
          updated_at: string | null;
          upvotes: number | null;
          user_id: string;
          views: number | null;
        };
        Insert: {
          created_at?: string | null;
          description?: string | null;
          downvotes?: number | null;
          id?: never;
          og_image_url?: string | null;
          og_url?: string | null;
          origin_url?: string | null;
          title: string;
          updated_at?: string | null;
          upvotes?: number | null;
          user_id: string;
          views?: number | null;
        };
        Update: {
          created_at?: string | null;
          description?: string | null;
          downvotes?: number | null;
          id?: never;
          og_image_url?: string | null;
          og_url?: string | null;
          origin_url?: string | null;
          title?: string;
          updated_at?: string | null;
          upvotes?: number | null;
          user_id?: string;
          views?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: 'feeds_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      tags: {
        Row: {
          created_at: string | null;
          id: number;
          name: string;
        };
        Insert: {
          created_at?: string | null;
          id?: never;
          name: string;
        };
        Update: {
          created_at?: string | null;
          id?: never;
          name?: string;
        };
        Relationships: [];
      };
      users: {
        Row: {
          avatar_url: string | null;
          email: string | null;
          id: string;
          username: string | null;
        };
        Insert: {
          avatar_url?: string | null;
          email?: string | null;
          id: string;
          username?: string | null;
        };
        Update: {
          avatar_url?: string | null;
          email?: string | null;
          id?: string;
          username?: string | null;
        };
        Relationships: [];
      };
      votes: {
        Row: {
          created_at: string | null;
          feed_id: number;
          id: number;
          user_id: string;
          vote_type: string | null;
        };
        Insert: {
          created_at?: string | null;
          feed_id: number;
          id?: never;
          user_id: string;
          vote_type?: string | null;
        };
        Update: {
          created_at?: string | null;
          feed_id?: number;
          id?: never;
          user_id?: string;
          vote_type?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'votes_feed_id_fkey';
            columns: ['feed_id'];
            isOneToOne: false;
            referencedRelation: 'feeds';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'votes_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, 'public'>];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    ? (PublicSchema['Tables'] & PublicSchema['Views'])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends keyof PublicSchema['Tables'] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends keyof PublicSchema['Tables'] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends keyof PublicSchema['Enums'] | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
    ? PublicSchema['Enums'][PublicEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema['CompositeTypes']
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema['CompositeTypes']
    ? PublicSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
    : never;
