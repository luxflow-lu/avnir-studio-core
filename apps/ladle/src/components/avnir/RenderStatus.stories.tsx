import React from "react";
import { RenderStatus } from "./RenderStatus";

export default { title: "AVNIR/RenderStatus" };

const mockJobs = [
  {
    id: "1",
    name: "Beat Trap Lourd.wav",
    type: "audio" as const,
    status: "processing" as const,
    progress: 65,
    startTime: new Date(Date.now() - 45000),
    estimatedTime: 30,
    modelUsed: "BeatMaker Pro v2.1",
    creditsUsed: 5,
  },
  {
    id: "2",
    name: "Clip Officiel.mp4",
    type: "video" as const,
    status: "completed" as const,
    startTime: new Date(Date.now() - 180000),
    endTime: new Date(Date.now() - 30000),
    outputUrl: "https://example.com/output.mp4",
    modelUsed: "Video AI v1.5",
    creditsUsed: 15,
  },
  {
    id: "3",
    name: "Vocal Melody.wav",
    type: "audio" as const,
    status: "failed" as const,
    startTime: new Date(Date.now() - 120000),
    endTime: new Date(Date.now() - 90000),
    errorMessage: "Erreur de traitement: format audio non supporté",
    modelUsed: "Vocal Synth v1.8",
    creditsUsed: 8,
  },
  {
    id: "4",
    name: "Cover Album.jpg",
    type: "image" as const,
    status: "queued" as const,
    modelUsed: "Image Gen v2.0",
  },
  {
    id: "5",
    name: "Mix Final.wav",
    type: "audio" as const,
    status: "cancelled" as const,
    startTime: new Date(Date.now() - 60000),
    endTime: new Date(Date.now() - 45000),
    modelUsed: "Master AI v3.0",
  },
];

export const AllStates = () => (
  <div className="bg-[var(--bg)] text-white p-6 space-y-4">
    {mockJobs.map((job) => (
      <RenderStatus
        key={job.id}
        job={job}
        onCancel={(id) => console.log("Cancel", id)}
        onRetry={(id) => console.log("Retry", id)}
        onDownload={(id) => console.log("Download", id)}
      />
    ))}
  </div>
);

export const Processing = () => (
  <div className="bg-[var(--bg)] text-white p-6">
    <RenderStatus job={mockJobs[0]} onCancel={(id) => console.log("Cancel", id)} />
  </div>
);

export const Completed = () => (
  <div className="bg-[var(--bg)] text-white p-6">
    <RenderStatus job={mockJobs[1]} onDownload={(id) => console.log("Download", id)} />
  </div>
);

export const Failed = () => (
  <div className="bg-[var(--bg)] text-white p-6">
    <RenderStatus job={mockJobs[2]} onRetry={(id) => console.log("Retry", id)} />
  </div>
);

export const Queue = () => (
  <div className="bg-[var(--bg)] text-white p-6 space-y-4">
    <h3 className="text-lg font-semibold text-white">File de rendu</h3>
    <div className="space-y-3">
      {mockJobs.map((job) => (
        <RenderStatus
          key={job.id}
          job={job}
          showDetails={false}
          onCancel={(id) => console.log("Cancel", id)}
          onRetry={(id) => console.log("Retry", id)}
          onDownload={(id) => console.log("Download", id)}
        />
      ))}
    </div>
  </div>
);
