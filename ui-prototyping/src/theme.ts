import { createTheme } from "@mantine/core";


export const theme = createTheme({
  primaryColor: 'purple',
  colors: {
    purple: [
      "#f1f1ff",
      "#e0dff2",
      "#bfbdde",
      "#9b98ca",
      "#7d79b9",
      "#6a66af",
      "#605cac",
      "#504c97",
      "#464388",
      "#3b3979"
    ]
  },
  shadows: {
    md: '0 2px 8px 0 rgba(24,25,42,0.08)',
    lg: '0 4px 12px 0 rgba(24,25,42,0.12)',
  },
  defaultRadius: 'md',
  components: {
    Button: {
      defaultProps: {
        color: 'purple',
      },
    },
  },
});