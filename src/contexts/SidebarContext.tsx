import {
  createContext,
  type FC,
  memo,
  type PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";

export interface SelectedProps {
  home: boolean;
  dashboard: boolean;
  projects: boolean;
  tasks: boolean;
  reporting: boolean;
  users: boolean;
  support: boolean;
  settings: boolean;
}

interface SidebarContextProps extends SelectedProps {
  handleSelected: (item: keyof SelectedProps) => void;
}

export const SidebarContext = createContext<SidebarContextProps>({
  home: false,
  dashboard: false,
  projects: false,
  tasks: false,
  reporting: false,
  users: false,
  support: false,
  settings: false,
  handleSelected: () => {
    console.log("Default Handle Selected | Sidebar");
  },
});

interface SidebarProviderProps extends PropsWithChildren {}

const SidebarContextProvider: FC<SidebarProviderProps> = ({ children }) => {
  const [isSelected, setSelected] = useState<SelectedProps>({
    home: false,
    dashboard: false,
    projects: false,
    tasks: false,
    reporting: false,
    users: false,
    support: false,
    settings: false,
  });
  const {
    home,
    dashboard,
    projects,
    tasks,
    reporting,
    users,
    support,
    settings,
  } = isSelected;

  function select(param: keyof SelectedProps) {
    setSelected(() => {
      const newState: SelectedProps = {
        home: false,
        dashboard: false,
        projects: false,
        tasks: false,
        reporting: false,
        users: false,
        support: false,
        settings: false,
      };
      newState[param] = true;
      return newState;
    });
  }

  const handleSelected = (item: keyof SelectedProps) => {
    switch (item) {
      case "home":
        select("home");
        break;
      case "dashboard":
        select("dashboard");
        break;
      case "projects":
        select("projects");
        break;
      case "reporting":
        select("reporting");
        break;
      case "users":
        select("users");
        break;
      case "support":
        select("support");
        break;
      case "settings":
        select("settings");
        break;
    }
  };
  useEffect(() => {
    console.log(isSelected);
  }, [isSelected]);

  return (
    <SidebarContext.Provider
      value={{
        home,
        dashboard,
        projects,
        tasks,
        reporting,
        users,
        support,
        settings,
        handleSelected,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export default memo(SidebarContextProvider);
