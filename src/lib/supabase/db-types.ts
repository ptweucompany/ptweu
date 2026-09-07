// Generated from Supabase (project edxawclzktunjdxsirpv) via `generate_typescript_types`.
// Regenerate after schema changes. Do not edit by hand.

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

type StrCols<K extends string> = { [P in K]: string };
type StrColsOpt<K extends string> = { [P in K]?: string };

export type Database = {
  __InternalSupabase: { PostgrestVersion: '14.5' };
  public: {
    Tables: {
      content_blocks: {
        Row: {
          group: string;
          key: string;
          label: string;
          sort_order: number;
          type: string;
          updated_at: string;
          value_en: string;
          value_id: string;
        };
        Insert: {
          group?: string;
          key: string;
          label?: string;
          sort_order?: number;
          type?: string;
          updated_at?: string;
          value_en?: string;
          value_id?: string;
        };
        Update: {
          group?: string;
          key?: string;
          label?: string;
          sort_order?: number;
          type?: string;
          updated_at?: string;
          value_en?: string;
          value_id?: string;
        };
        Relationships: [];
      };
      content_revisions: {
        Row: { created_at: string; created_by: string | null; id: string; note: string; snapshot: Json };
        Insert: { created_at?: string; created_by?: string | null; id?: string; note?: string; snapshot: Json };
        Update: { created_at?: string; created_by?: string | null; id?: string; note?: string; snapshot?: Json };
        Relationships: [];
      };
      inquiries: {
        Row: StrCols<
          | 'admin_notes' | 'company' | 'country' | 'created_at' | 'delivery' | 'email' | 'form'
          | 'id' | 'industry' | 'message' | 'name' | 'packaging' | 'phone' | 'product'
          | 'source' | 'status' | 'updated_at' | 'volume'
        >;
        Insert: StrColsOpt<
          | 'admin_notes' | 'company' | 'country' | 'created_at' | 'delivery' | 'email' | 'form'
          | 'id' | 'industry' | 'message' | 'name' | 'packaging' | 'phone' | 'product'
          | 'source' | 'status' | 'updated_at' | 'volume'
        >;
        Update: StrColsOpt<
          | 'admin_notes' | 'company' | 'country' | 'created_at' | 'delivery' | 'email' | 'form'
          | 'id' | 'industry' | 'message' | 'name' | 'packaging' | 'phone' | 'product'
          | 'source' | 'status' | 'updated_at' | 'volume'
        >;
        Relationships: [];
      };
      private_config: {
        Row: { key: string; updated_at: string; value: string };
        Insert: { key: string; updated_at?: string; value?: string };
        Update: { key?: string; updated_at?: string; value?: string };
        Relationships: [];
      };
      product_pricing: {
        Row: {
          currency: string;
          note: string;
          price_max: number | null;
          price_min: number | null;
          product_id: string;
          unit: string;
          updated_at: string;
          updated_by: string | null;
        };
        Insert: {
          currency?: string;
          note?: string;
          price_max?: number | null;
          price_min?: number | null;
          product_id: string;
          unit?: string;
          updated_at?: string;
          updated_by?: string | null;
        };
        Update: {
          currency?: string;
          note?: string;
          price_max?: number | null;
          price_min?: number | null;
          product_id?: string;
          unit?: string;
          updated_at?: string;
          updated_by?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'product_pricing_product_id_fkey';
            columns: ['product_id'];
            isOneToOne: true;
            referencedRelation: 'products';
            referencedColumns: ['id'];
          },
        ];
      };
      products: {
        Row: {
          applications: Json;
          certs: Json;
          description_en: string;
          description_id: string;
          faq_id: Json;
          hero_subtitle_en: string;
          hero_subtitle_id: string;
          id: string;
          image: string;
          internal_links: Json;
          is_published: boolean;
          key_features_en: Json;
          key_features_id: Json;
          lead_time: string;
          moq: string;
          name_en: string;
          name_id: string;
          packaging: Json;
          size_variants: Json;
          slug_en: string;
          slug_id: string;
          sort_order: number;
          specs: Json;
          updated_at: string;
        };
        Insert: {
          applications?: Json;
          certs?: Json;
          description_en?: string;
          description_id?: string;
          faq_id?: Json;
          hero_subtitle_en?: string;
          hero_subtitle_id?: string;
          id: string;
          image?: string;
          internal_links?: Json;
          is_published?: boolean;
          key_features_en?: Json;
          key_features_id?: Json;
          lead_time?: string;
          moq?: string;
          name_en?: string;
          name_id?: string;
          packaging?: Json;
          size_variants?: Json;
          slug_en?: string;
          slug_id?: string;
          sort_order?: number;
          specs?: Json;
          updated_at?: string;
        };
        Update: {
          applications?: Json;
          certs?: Json;
          description_en?: string;
          description_id?: string;
          faq_id?: Json;
          hero_subtitle_en?: string;
          hero_subtitle_id?: string;
          id?: string;
          image?: string;
          internal_links?: Json;
          is_published?: boolean;
          key_features_en?: Json;
          key_features_id?: Json;
          lead_time?: string;
          moq?: string;
          name_en?: string;
          name_id?: string;
          packaging?: Json;
          size_variants?: Json;
          slug_en?: string;
          slug_id?: string;
          sort_order?: number;
          specs?: Json;
          updated_at?: string;
        };
        Relationships: [];
      };
      site_settings: {
        Row: {
          email_primary: string;
          email_secondary: string;
          employees_approx: number;
          facebook_url: string;
          founded: string;
          id: number;
          instagram_url: string;
          legal: Json;
          legal_name: string;
          linkedin_url: string;
          offices: Json;
          phone: string;
          short_name: string;
          tagline_en: string;
          tagline_id: string;
          updated_at: string;
          whatsapp: string;
          whatsapp_url: string;
        };
        Insert: {
          email_primary?: string;
          email_secondary?: string;
          employees_approx?: number;
          facebook_url?: string;
          founded?: string;
          id?: number;
          instagram_url?: string;
          legal?: Json;
          legal_name?: string;
          linkedin_url?: string;
          offices?: Json;
          phone?: string;
          short_name?: string;
          tagline_en?: string;
          tagline_id?: string;
          updated_at?: string;
          whatsapp?: string;
          whatsapp_url?: string;
        };
        Update: {
          email_primary?: string;
          email_secondary?: string;
          employees_approx?: number;
          facebook_url?: string;
          founded?: string;
          id?: number;
          instagram_url?: string;
          legal?: Json;
          legal_name?: string;
          linkedin_url?: string;
          offices?: Json;
          phone?: string;
          short_name?: string;
          tagline_en?: string;
          tagline_id?: string;
          updated_at?: string;
          whatsapp?: string;
          whatsapp_url?: string;
        };
        Relationships: [];
      };
    };
    Views: { [_ in never]: never };
    Functions: { [_ in never]: never };
    Enums: { [_ in never]: never };
    CompositeTypes: { [_ in never]: never };
  };
};
