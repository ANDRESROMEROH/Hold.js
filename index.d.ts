interface hold {
    /**
     * @param ms The amount of milliseconds to wait.
     * @return A promise that gets resolved after a given amount of milliseconds.
     */
    millisecs(ms?: number): Promise<void>;
    /**
     * @param s The amount of seconds to wait.
     * @return A promise that gets resolved after a given amount of seconds.
     */
    seconds(s?: number): Promise<void>;
    /**
     * @param min The amount of minutes to wait.
     * @return A promise that gets resolved after a given amount of minutes.
     */
    minutes(min?: number): Promise<void>;
    /**
     * @param hr The amount of hours to wait.
     * @return A promise that gets resolved after a given amount of hours.
     */
    hours(hr?: number): Promise<void>;
}