export function passedTime(): string {
    const initial: Date = new Date(2025, 3, 2, 20, 0);
    const now: Date = new Date();

    const diffInMilliseconds: number = now.getTime() - initial.getTime();
    const diffInSeconds: number = Math.floor(diffInMilliseconds / 1000);

    if (diffInSeconds <= 0) return "Just now";

    const days: number = Math.floor(diffInSeconds / (24 * 3600));
    if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;

    const hours: number = Math.floor(diffInSeconds / 3600);
    if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;

    const minutes: number = Math.floor(diffInSeconds / 60);
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;

    return `${diffInSeconds} second${diffInSeconds > 1 ? 's' : ''} ago`;
}
