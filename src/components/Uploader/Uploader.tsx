"use client";
import { formatBytes } from "@/utils/formatBytes";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { User, UploadCloud, Trash2, CheckCircle2 } from "lucide-react";
import {
  createContext,
  useContext,
  useEffect,
  useId,
  useMemo,
  useState,
  type ChangeEvent,
  type ComponentProps,
} from "react";
import { Button } from "../Buttons/Button";
import { tv, type VariantProps } from "tailwind-variants";
import {
  motion,
  useMotionValue,
  useSpring,
  useTime,
  useTransform,
} from "motion/react";

interface InputProps extends ComponentProps<"input"> {}
interface RootProps extends ComponentProps<"div"> {}
interface MainProps extends ComponentProps<"div"> {}
interface DescProps {
  title: string;
  subT: string;
}

type FileInputContextType = {
  id: string;
  files: File[];
  onFilesSelected: (files: File[], multiple: boolean) => void;
};

const fileItem = tv({
  slots: {
    container:
      "group flex items-start gap-4 rounded-lg border border-zinc-400 p-4",
    icon: "rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-500",
    deleteBtn: "",
  },
  variants: {
    state: {
      error: {
        container:
          "bg-red-10 border-red-300 dark:bg-red-500/5 dark:border-red-500/30",
        icon: "border-red-50 bg-red-100 text-red-600 dark:bg-red-500/5 dark:border-red-500/30 dark:text-red-400",
        deleteBtn:
          "text-red-700 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300",
      },
    },
  },
});
interface FileItemProps extends VariantProps<typeof fileItem> {
  name: string;
  size: number;
}

const FileInputContext = createContext({} as FileInputContextType);
const useFileInput = () => useContext(FileInputContext);

export function Control({ multiple = false, ...props }: InputProps) {
  const { id, onFilesSelected } = useFileInput();
  function handleFilesSelected(ev: ChangeEvent<HTMLInputElement>) {
    if (!ev.target.files?.length) {
      return;
    }
    const files = Array.from(ev.target.files);
    onFilesSelected(files, multiple);
  }
  return (
    <input
      type="file"
      className="sr-only"
      id={id}
      onChange={handleFilesSelected}
      multiple={multiple}
      {...props}
    />
  );
}
function FileItem({ name, size, state }: FileItemProps) {
  const { container, icon, deleteBtn } = fileItem({ state });
  const time = useTime();
  const progress = useTransform(time, [0, 2000], [0, 100]);
  const width = useTransform(progress, (val) => `${val}%`);
  const [percent,setPercent]=useState<number>(0);

  useEffect(()=>{
    progress.on("change",(val)=>{
      if(val<=100)setPercent(Math.round(val));
    })
  },[progress])

  return (
    <div key={name} className={container()}>
      
      <div className={icon()}>
        <UploadCloud className="h-4 w-4" />
      </div>
      {state === "error" ? (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-red-700 dark:text-red-400">
              Upload Failed, please try again.
            </span>
            <span className="text-sm text-red-500 dark:text-red-500">
              {formatBytes(size)}
            </span>
          </div>
          <div className="flex w-full items-center gap-3">
            <button
              type="button"
              className="text-sm font-semibold text-red-700 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
            >
              Try Again
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-zinc-600 dark:text-zinc-100">
              {name}
            </span>
            <span className="text-sm dark:text-zinc-400">
              {formatBytes(size)}
            </span>
          </div>
          <div className="flex w-full items-center gap-3">
            <div className="h-2 flex-1 rounded-full bg-zinc-100 dark:bg-zinc-600">
              <motion.div
                style={{ width }}
                className="h-2 rounded-full bg-violet-600 dark:bg-violet-400"
              />
            </div>
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {percent}%
            </span>
          </div>
        </div>
      )}

      {state !== "error" ? (
        <CheckCircle2 className="h-5 w-5 fill-violet-600 text-white" />
      ) : (
        <Button type="button" variant="ghost" className={deleteBtn()}>
          <Trash2 className="w-5 h-5" />
        </Button>
      )}
    </div>
  );
}
export function FileList() {
  const [parent] = useAutoAnimate();
  const { files } = useFileInput();

  return (
    <div className="mt-4 space-y-3">
      <div ref={parent} className="mt-4 space-y-3">
        {files.map((file) => {
          return <FileItem key={file.name} name={file.name} size={file.size} />;
        })}
      </div>
    </div>
  );
}

export function UserPreview() {
  const { files } = useFileInput();
  const previewURL = useMemo(() => {
    if (files.length === 0) {
      return null;
    }
    return URL.createObjectURL(files[0]);
  }, [files]);

  if (previewURL === null) {
    return (
      <div className="flex h-16 w-16 max-lg:self-center items-center justify-center rounded-full bg-violet-50 dark:bg-violet-500/10">
        <User className="h-8 w-8 text-violet-500 dark:text-violet-300" />
      </div>
    );
  }
  return (
    <img
      src={previewURL}
      alt=""
      className="flex max-lg:self-center h-16 w-16 rounded-full object-cover"
    />
  );
}
function UploadPreview() {
  return (
    <div className="rounded-full border-6 border-zinc-50 group-hover:border-violet-50 group-hover:bg-violet-100 bg-zinc-100 p-2 dark:border-zinc-700 dark:bg-zinc-800 dark:group-hover:border-zinc-600 dark:group-hover:bg-zinc-700">
      <UploadCloud className="h-5 w-5 text-zinc-600 group-hover:text-violet-600  dark:text-zinc-500 dark:group-hover:text-violet-300" />
    </div>
  );
}

export function Root(props: RootProps) {
  const id = useId();
  const [files, setFiles] = useState<File[]>([]);

  function onFilesSelected(files: File[], multiple: boolean) {
    if (multiple) {
      setFiles((state) => [...state, ...files]);
    } else {
      setFiles(files);
    }
  }

  return (
    <FileInputContext.Provider value={{ id, files, onFilesSelected }}>
      <div {...props} />
    </FileInputContext.Provider>
  );
}

export function Trigger() {
  const { id } = useFileInput();
  const [files, setFiles] = useState<File[]>([]);
  console.log(id);
  return (
    <FileInputContext.Provider value={{ id, files, onFilesSelected: setFiles }}>
      <label
        htmlFor={id}
        className="group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm hover:border-violet-200 hover:bg-violet-25 hover:text-violet-500 dark:border-zinc-800 dark:hover:border-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-violet-300"
      >
        <UploadPreview />
        <div className="flex flex-col items-center gap-1">
          <span className="text-sm">
            <span className="font-semibold text-violet-700 group-hover:text-violet-850 dark:text-violet-300">
              Click to upload
            </span>{" "}
            or drag and drop
          </span>
          <span className="text-xs">SVG, PNG, JPG or GIF (max. 800x400px)</span>
        </div>
      </label>
    </FileInputContext.Provider>
  );
}
export function Description({ title, subT }: DescProps) {
  const { id } = useFileInput();
  return (
    <label htmlFor={id} className="text-sm font-medium text-zinc-700">
      {title}
      <span className="mt-1 block text-sm font-normal text-zinc-500">
        {subT}
      </span>
    </label>
  );
}
export function Main(props: MainProps) {
  return <div {...props} />;
}
