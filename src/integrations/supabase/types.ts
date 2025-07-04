export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      AimLaunch: {
        Row: {
          created_at: string
          id: number
        }
        Insert: {
          created_at?: string
          id?: number
        }
        Update: {
          created_at?: string
          id?: number
        }
        Relationships: []
      }
      flash_card_categories: {
        Row: {
          color: string
          created_at: string
          description: string | null
          id: string
          name: string
          user_id: string
        }
        Insert: {
          color?: string
          created_at?: string
          description?: string | null
          id?: string
          name: string
          user_id: string
        }
        Update: {
          color?: string
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          user_id?: string
        }
        Relationships: []
      }
      flash_card_img: {
        Row: {
          created_at: string
          id: string
          img: string | null
        }
        Insert: {
          created_at?: string
          id: string
          img?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          img?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "flash_card_img_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "flash_cards"
            referencedColumns: ["id"]
          },
        ]
      }
      flash_cards: {
        Row: {
          back_content: string
          category: string
          created_at: string
          description: string | null
          difficulty_level: string
          front_content: string
          id: string
          image_url: string | null
          is_bookmarked: boolean
          last_reviewed: string | null
          mastery_level: string
          revision_count: number
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          back_content: string
          category?: string
          created_at?: string
          description?: string | null
          difficulty_level?: string
          front_content: string
          id?: string
          image_url?: string | null
          is_bookmarked?: boolean
          last_reviewed?: string | null
          mastery_level?: string
          revision_count?: number
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          back_content?: string
          category?: string
          created_at?: string
          description?: string | null
          difficulty_level?: string
          front_content?: string
          id?: string
          image_url?: string | null
          is_bookmarked?: boolean
          last_reviewed?: string | null
          mastery_level?: string
          revision_count?: number
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      interview_reports: {
        Row: {
          created_at: string
          id: string
          pdf_url: string | null
          report_data: Json | null
          session_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          pdf_url?: string | null
          report_data?: Json | null
          session_id: string
        }
        Update: {
          created_at?: string
          id?: string
          pdf_url?: string | null
          report_data?: Json | null
          session_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "interview_reports_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "interview_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      interview_responses: {
        Row: {
          ai_analysis: Json | null
          audio_transcript: string | null
          created_at: string
          id: string
          question_category: string
          question_difficulty: string
          question_number: number
          question_score: number | null
          question_text: string
          response_time_seconds: number | null
          session_id: string
        }
        Insert: {
          ai_analysis?: Json | null
          audio_transcript?: string | null
          created_at?: string
          id?: string
          question_category: string
          question_difficulty: string
          question_number: number
          question_score?: number | null
          question_text: string
          response_time_seconds?: number | null
          session_id: string
        }
        Update: {
          ai_analysis?: Json | null
          audio_transcript?: string | null
          created_at?: string
          id?: string
          question_category?: string
          question_difficulty?: string
          question_number?: number
          question_score?: number | null
          question_text?: string
          response_time_seconds?: number | null
          session_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "interview_responses_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "interview_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      interview_sessions: {
        Row: {
          ai_feedback: Json | null
          areas_evaluated: string[] | null
          communication_score: number | null
          company_name: string
          created_at: string
          cultural_fit_score: number | null
          experience_level: string
          id: string
          job_role: string
          overall_score: number | null
          problem_solving_score: number | null
          recommendations: string[] | null
          resume_id: string | null
          session_end: string | null
          session_start: string
          technical_score: number | null
          total_questions: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          ai_feedback?: Json | null
          areas_evaluated?: string[] | null
          communication_score?: number | null
          company_name: string
          created_at?: string
          cultural_fit_score?: number | null
          experience_level: string
          id?: string
          job_role: string
          overall_score?: number | null
          problem_solving_score?: number | null
          recommendations?: string[] | null
          resume_id?: string | null
          session_end?: string | null
          session_start?: string
          technical_score?: number | null
          total_questions?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          ai_feedback?: Json | null
          areas_evaluated?: string[] | null
          communication_score?: number | null
          company_name?: string
          created_at?: string
          cultural_fit_score?: number | null
          experience_level?: string
          id?: string
          job_role?: string
          overall_score?: number | null
          problem_solving_score?: number | null
          recommendations?: string[] | null
          resume_id?: string | null
          session_end?: string | null
          session_start?: string
          technical_score?: number | null
          total_questions?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "interview_sessions_resume_id_fkey"
            columns: ["resume_id"]
            isOneToOne: false
            referencedRelation: "resumes"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          branch: string | null
          category: string | null
          created_at: string
          degree: string | null
          email: string | null
          full_name: string | null
          gender: string | null
          id: string
          profile_completed: boolean | null
          specialization: string | null
          updated_at: string
          year_of_engineering: string | null
        }
        Insert: {
          avatar_url?: string | null
          branch?: string | null
          category?: string | null
          created_at?: string
          degree?: string | null
          email?: string | null
          full_name?: string | null
          gender?: string | null
          id: string
          profile_completed?: boolean | null
          specialization?: string | null
          updated_at?: string
          year_of_engineering?: string | null
        }
        Update: {
          avatar_url?: string | null
          branch?: string | null
          category?: string | null
          created_at?: string
          degree?: string | null
          email?: string | null
          full_name?: string | null
          gender?: string | null
          id?: string
          profile_completed?: boolean | null
          specialization?: string | null
          updated_at?: string
          year_of_engineering?: string | null
        }
        Relationships: []
      }
      resumes: {
        Row: {
          created_at: string
          file_name: string
          file_size: number
          file_type: string
          id: string
          parsed_data: Json
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          file_name: string
          file_size: number
          file_type: string
          id?: string
          parsed_data: Json
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          file_name?: string
          file_size?: number
          file_type?: string
          id?: string
          parsed_data?: Json
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
